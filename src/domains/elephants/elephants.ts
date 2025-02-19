import { Module } from "@nestjs/common";
import { ElephantsController } from "./controller/elephants.controller";
import { ElephantsService } from "./services/elephants.service";

@Module({
    controllers: [ElephantsController],
    providers: [ElephantsService]
})

export class ElephantsModule { }
