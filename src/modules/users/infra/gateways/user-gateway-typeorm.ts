import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from '../../../../shared/entities/user.entity';
import { UserModel } from '../../../../shared/models/user.model';
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
