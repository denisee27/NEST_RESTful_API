import { Injectable } from '@nestjs/common';
import { User } from './entities/user.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateUserDto } from './dto/create_user.dto';
import * as bcrypt from 'bcrypt';

@Injectable()
export class UsersService {
    constructor(
        @InjectRepository(User)
        private userRepository: Repository<User>,
    ) { }

    async getAll(): Promise<any> {
        return await this.userRepository.find() || [];
    }

    async getId(id: number): Promise<any> {
        return await this.userRepository.findOneBy({ id }) || {}
    }

    async create(createUserDto: CreateUserDto): Promise<any> {
        try {
            createUserDto.password = await bcrypt.hash(createUserDto.password, 10);
            const data = await this.userRepository.save(createUserDto)
            return data
        } catch (e) {
            return e.message
        }
    }

    async update(id: string, updateUserDto: CreateUserDto): Promise<User | null> {
        const user = await this.userRepository.findOne({ where: { id: Number(id) } });

        if (!user) {
            return null;
        }
        updateUserDto.password = await bcrypt.hash(updateUserDto.password, 10);
        user.email = updateUserDto.email || user.email;
        user.name = updateUserDto.name || user.name;
        user.status = updateUserDto.status || user.status;
        user.age = updateUserDto.age || user.age;
        user.password = updateUserDto.password || user.password;
        return this.userRepository.save(user);
    }

    async delete(id: string): Promise<User | null> {
        const user = await this.userRepository.findOne({ where: { id: Number(id) } });
        if (!user) {
            return null;
        }
        await this.userRepository.remove(user);
        return user;
    }
}
