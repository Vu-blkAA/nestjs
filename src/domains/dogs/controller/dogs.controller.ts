import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { ICat } from 'src/interface/cat.interface';
import { CreateCatDto, UpdateCatDTO } from '../dto/create-cat.dto';
import { DogsService } from '../services/dogs.service';

@Controller('dogs')
export class DogsController {
    constructor(private readonly _dogsService: DogsService) { }

    @Get('')
    findAll(): ICat[] {
        return this._dogsService.findAll();
    }

    @Get(':id')
    findById(@Param() params: { id: string }) {
        return this._dogsService.findOne(params.id);
    }

    @Post()
    create(@Body() createCatDto: CreateCatDto) {
        return this._dogsService.create(createCatDto);
    }

    @Put(':id')
    update(@Param() params: { id: string }, body: UpdateCatDTO) {
        return 'This action will update dog ' + JSON.stringify(body);
    }

    @Delete(':id')
    delete(@Param() params: { id: string }) {
        const { id } = params;
        return `This action will delete a #${id} dog`;
    }
}
