import { Body, Controller, Get, HttpStatus, Post, Res } from '@nestjs/common';
import { Response } from 'express';
import { UserService } from '../../domain/services/user.service';
import { CreateUserDto } from '../dtos/create-user.dto';

@Controller('users')
export class UserController {
    constructor(private readonly userService: UserService) {}

    @Get()
    async findUsers(@Res() res: Response) {
        try {
            const users = await this.userService.findAllUsers();
            return res.status(HttpStatus.OK).send({
                statusCode: HttpStatus.OK,
                content: users,
            });
        } catch (error) {
            console.log('error.message -> ', error.message);
            return res.status(HttpStatus.BAD_REQUEST).send({
                statusCode: HttpStatus.BAD_REQUEST,
                message: error.message,
            });
        }
    }

    @Post()
    async createUser(@Body() body: CreateUserDto, @Res() res: Response) {
        try {
            const createdUser = await this.userService.createUser(body);
            return res.status(HttpStatus.OK).send({
                statusCode: HttpStatus.OK,
                content: createdUser,
            });
        } catch (error) {
            console.log('error.message -> ', error.message);
            return res.status(HttpStatus.BAD_REQUEST).send({
                statusCode: HttpStatus.BAD_REQUEST,
                message: error.message,
            });
        }
    }
}
