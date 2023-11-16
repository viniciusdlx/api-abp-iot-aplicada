import { Inject } from '@nestjs/common';
import { User } from '../../../../shared/entities/user.entity';
import { IUserGateway } from '../../infra/interfaces/user-gateway.interface';

export class FindAllUsersUseCase {
    constructor(
        @Inject('IUserGateway') private readonly userGateway: IUserGateway,
    ) {}

    async execute(): Promise<User[]> {
        const users = await this.userGateway.findAll();

        return users;
    }
}
