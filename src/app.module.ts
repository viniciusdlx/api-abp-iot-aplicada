import { Module } from '@nestjs/common';
import { DatabaseModule } from './config/database/database.module';
import { UserModule } from './modules/users/user.module';

@Module({
    imports: [DatabaseModule, UserModule],
    controllers: [],
    providers: [],
})
export class AppModule {}
