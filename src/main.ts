import { NestFactory } from '@nestjs/core';
import * as fs from 'fs';
import { cwd } from 'process';
import { AppModule } from './app.module';

async function bootstrap() {
    fs.readdir('./src', (err, files) => {
        if (err) {
            console.error(err);
            return;
        }
        console.log(files);
    });
    console.log('cwd -> ', `${cwd()}/dist/db.sqlite`);
    console.log('dirname -> ', `${__dirname}/db.sqlite`);
    const app = await NestFactory.create(AppModule);

    app.enableCors();

    const PORT = process.env.PORT || 3000;

    await app.listen(PORT, () => {
        console.log('Hello world listening on port', PORT);
    });
}
bootstrap();
