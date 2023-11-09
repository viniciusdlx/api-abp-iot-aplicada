import { Inject } from '@nestjs/common';
import * as bcrypt from 'bcrypt';
import { User } from 'src/shared/entities/user.entity';
import { IUserGateway } from '../../infra/interfaces/user-gateway.interface';
import { CreateUserDto } from '../../presentation/dtos/create-user.dto';

export class CreateUserUseCase {
    constructor(
        @Inject('IUserGateway') private readonly userGateway: IUserGateway,
    ) {}

    async execute(data: CreateUserDto): Promise<User> {
        const saltOrRounds = 10;
        const password = data.password;
        const hash = await bcrypt.hash(password, saltOrRounds);
        const newUser = new User({
            name: data.name,
            email: data.email,
            password: hash,
            biometry: data.biometria,
            rfid: data.rfid,
        });

        const userCreated = await this.userGateway.create(newUser);

        return userCreated;
    }
}
