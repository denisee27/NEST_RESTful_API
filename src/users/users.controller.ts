import { Controller, Get, Param, Post, Put } from '@nestjs/common';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
    constructor(private readonly userService: UsersService) {}

    @Get()
    get() {
        return this.userService.findAll();
    }

    @Get(':id')
    getId(@Param('id') id: string) {
        return id
    }

    @Post()
    create() {
        return 'create user'
    }

    @Put(':id')
    update(@Param('id') id: string) {
        return id
    }
}
