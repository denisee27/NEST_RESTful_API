import { Body, Controller, Delete, Get, Param, Patch, Post, Res } from '@nestjs/common';
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
    async create(@Res() res, @Body() createUserDto: CreateUserDto) {
        try {
            await this.userService.create(createUserDto)
            return AppResponse.ok(res, 'ok')
        } catch (e) {
            return AppResponse.badRequest(res, e.message)
        }
    }

    @Patch('update/:id')
    async update(@Res() res, @Param('id') id: string, @Body() updateUserDto: CreateUserDto) {
        try {
            const updatedUser = await this.userService.update(id, updateUserDto);
            if (!updatedUser) {
                return AppResponse.badRequest(res, 'User not found');
            }
            return AppResponse.ok(res, 'ok');
        } catch (e) {
            return AppResponse.badRequest(res, e.message);
        }
    }
    @Delete('delete/:id')
    async delete(@Res() res, @Param('id') id: string) {
        try {
            const deletedUser = await this.userService.delete(id);
            if (!deletedUser) {
                return AppResponse.badRequest(res, 'User not found');
            }
            return AppResponse.ok(res, 'ok');
        } catch (e) {
            return AppResponse.badRequest(res, e.message);
        }
    }
}
