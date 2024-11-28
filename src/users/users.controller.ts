import { Controller, Get, Param, Post, Put } from '@nestjs/common';

@Controller('users')
export class UsersController {
    @Get()
    get() {
        return 'ini adalah GetAll'
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
