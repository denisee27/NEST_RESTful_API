import { Body, Controller, Get, Param, Post, Put, Res } from '@nestjs/common';
import { UsersService } from './users.service';
import { AppResponse } from 'src/response.base';
import { CreateUserDto } from './dto/create_user.dto';

@Controller('users')
export class UsersController {
    constructor(private readonly userService: UsersService) { }

    @Get()
    async get(@Res() res) {
        try {
            const data = await this.userService.getAll()
            return AppResponse.ok(res, { data })
        } catch (e) {
            return AppResponse.badRequest(res, e.message)
        }
    }

    @Get(':id')
    async getId(@Param('id') id: number, @Res() res) {
        try {
            const data = await this.userService.getId(id)
            return AppResponse.ok(res, { data })
        } catch (e) {
            return AppResponse.badRequest(res, e.message)
        }
    }

    @Post('create')
    async create(@Res() res, @Body() createUserDto:CreateUserDto ) {
        try {
            await this.userService.create(createUserDto)
            return AppResponse.ok(res, 'ok')
        } catch (e) {
            return AppResponse.badRequest(res, e.message)
        }
    }

    @Put(':id')
    update(@Param('id') id: string) {
        return id
    }
}
