import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from 'src/shared/entities/user.entity';
import { UserModel } from 'src/shared/models/user.model';
import { Repository } from 'typeorm';
import { IUserGateway } from '../interfaces/user-gateway.interface';

@Injectable()
export class UserGatewayTypeOrm implements IUserGateway {
    constructor(
        @InjectRepository(UserModel)
        private readonly userRepository: Repository<UserModel>,
    ) {}

    async create(user: Partial<User>): Promise<User> {
        return await this.userRepository.save(user);
    }

    async findAll(): Promise<User[]> {
        return await this.userRepository.find();
    }
}
