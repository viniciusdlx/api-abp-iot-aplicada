import { User } from 'src/shared/entities/user.entity';

export interface IUserGateway {
    create(user: Partial<User>): Promise<User>;
    findAll(): Promise<User[]>;
}
