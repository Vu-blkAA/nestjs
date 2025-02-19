import { Module, UseFilters } from "@nestjs/common";
import { CatsController } from "./controller/cats.controller";
import { CatsService } from "./services/cats.service";
import { HttpExceptionFilter } from "src/exception/http-exception.filter";

@UseFilters(HttpExceptionFilter)
@Module({
    imports: [],
    controllers: [CatsController],
    providers: [CatsService]
})

export class CatsModules { }
