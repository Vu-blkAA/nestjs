import { Controller, Get, Module } from "@nestjs/common";
import { NestFactory } from "@nestjs/core";

@Controller()
class AppController {
    @Get()
    getAppRoute() {
        return 'this string'
    }
}


@Module({
    controllers: [AppController]
})
class AppModule { }


async function bootstrap() {
    const app = await NestFactory.create(AppModule);

    await app.listen(8000)
};

bootstrap()
