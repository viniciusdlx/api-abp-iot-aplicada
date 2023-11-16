import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserModel } from '../../shared/models/user.model';
import { UserService } from './domain/services/user.service';
import { CreateUserUseCase } from './domain/use-cases/create-user.use-case';
import { FindAllUsersUseCase } from './domain/use-cases/find-all-users.use-case';
import { UserGatewayTypeOrm } from './infra/gateways/user-gateway-typeorm';
import { UserController } from './presentation/controllers/user.controller';

export const IUserGateway = {
    provide: 'IUserGateway',
    useExisting: UserGatewayTypeOrm,
};

@Module({
    imports: [TypeOrmModule.forFeature([UserModel])],
    controllers: [UserController],
    providers: [
        UserService,
        IUserGateway,
        UserGatewayTypeOrm,
        FindAllUsersUseCase,
        CreateUserUseCase,
    ],
    exports: [],
})
export class UserModule {}
