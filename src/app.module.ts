import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { DatabaseModule } from './config/database/database.module';
import { UserModule } from './modules/users/user.module';

@Module({
    imports: [DatabaseModule, UserModule],
    controllers: [AppController],
    providers: [],
})
export class AppModule {}
