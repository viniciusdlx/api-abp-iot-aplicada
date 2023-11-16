import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
    console.log(__dirname);
    console.log('./../db.sqlite');
    const app = await NestFactory.create(AppModule);

    app.enableCors();

    const PORT = process.env.PORT || 3000;

    await app.listen(PORT, () => {
        console.log('Hello world listening on port', PORT);
    });
}
bootstrap();
