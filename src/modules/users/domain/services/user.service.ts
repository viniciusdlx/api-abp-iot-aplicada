import { Injectable } from '@nestjs/common';
import { User } from 'src/shared/entities/user.entity';
import { CreateUserDto } from '../../presentation/dtos/create-user.dto';
import { CreateUserUseCase } from '../use-cases/create-user.use-case';
import { FindAllUsersUseCase } from '../use-cases/find-all-users.use-case';

@Injectable()
export class UserService {
    constructor(
        private readonly findAllUsersUseCase: FindAllUsersUseCase,
        private readonly createUserUseCase: CreateUserUseCase,
    ) {}

    async findAllUsers(): Promise<User[]> {
        return await this.findAllUsersUseCase.execute();
    }

    async createUser(data: CreateUserDto): Promise<User> {
        return await this.createUserUseCase.execute(data);
    }
}
