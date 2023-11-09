import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import * as dotenv from 'dotenv';
dotenv.config();

// desativar firewall (local)
export const typeOrmConfig: TypeOrmModuleOptions = {
    type: 'sqlite',
    database: './src/config/database/db.sqlite',
    // entities: [__dirname + '/../**/**/*.model.{js,ts}'],
    synchronize: true,
};

export const ormConfig = typeOrmConfig;
