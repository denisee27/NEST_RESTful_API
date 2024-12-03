import { Injectable } from '@nestjs/common';
import { User } from './entities/user.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateUserDto } from './dto/create_user.dto';

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
            const data = await this.userRepository.save(createUserDto)
            return data
        } catch (e) {
            return e.message
        }
    }
}
