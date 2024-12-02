import { Injectable } from '@nestjs/common';
import { User } from './entities/user.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class UsersService {
    constructor(
        @InjectRepository(User)
        private userRepository: Repository<User>,
    ) { }

    async getAll(): Promise<User[]> {
        return await this.userRepository.find();
    }

    async getId(id: number): Promise<User> {
        return this.userRepository.findOne({
            where: { id: id },
        });
    }
}
