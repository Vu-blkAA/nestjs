import { Global, Module } from '@nestjs/common';
import { DogsController } from './controller/dogs.controller';
import { DogsService } from './services/dogs.service';

@Global()
@Module({
    imports: [],
    controllers: [DogsController],
    providers: [DogsService],
    exports: [DogsService]
})
export class DogsModule { }
