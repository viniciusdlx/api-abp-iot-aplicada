import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import * as dotenv from 'dotenv';
dotenv.config();

// desativar firewall (local)
export const typeOrmConfig: TypeOrmModuleOptions = {
    type: 'sqlite',
    database: `${__dirname}/db.sqlite`,
    // database: `${cwd()}/dist/db.sqlite`,
    // entities: [__dirname + '/../**/**/*.model.{js,ts}'],
    synchronize: false,
};

export const ormConfig = typeOrmConfig;
