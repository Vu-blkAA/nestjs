import { Body, Controller, Delete, Get, Headers, Param, Post, Put, Query, Req, Res } from '@nestjs/common';
import { CreateElephantDto, UpdateElephantDTO } from '../dto/create-elephant.dto';
import { ElephantsService } from '../services/elephants.service';
import { ICat } from 'src/interface/cat.interface';
import { DogsService } from 'src/domains/dogs/services/dogs.service';

@Controller('elephants')
export class ElephantsController {
    constructor(
        private readonly _elephantsService: ElephantsService,
    ) { }

    @Get('')
    findAll(): ICat[] {
        return this._elephantsService.findAll();
    }

    @Get(':id')
    findById(@Param() params: { id: string }) {
        return this._elephantsService.findOne(params.id);
    }

    @Post()
    create(@Body() createElephantDto: CreateElephantDto) {
        return this._elephantsService.create(createElephantDto);
    }

    @Put(':id')
    update(@Param() params: { id: string }, body: UpdateElephantDTO) {
        return 'This action will update elephant ' + JSON.stringify(body);
    }

    @Delete(':id')
    delete(@Param() params: { id: string }) {
        const { id } = params;
        return `This action will delete a #${id} cat`;
    }
}
