import { Body, Controller, Delete, Get, Param, ParseUUIDPipe, Post, Put, UsePipes, ValidationPipe } from '@nestjs/common';
import { ICat } from 'src/interface/cat.interface';
import { CreateCatDto, UpdateCatDTO } from '../dto/create-cat.dto';
import { CatsService } from '../services/cats.service';

@Controller('cats')
@UsePipes(new ValidationPipe())
export class CatsController {
    constructor(
        private readonly _catsService: CatsService,
    ) { }

    @Get('')
    findAll(): ICat[] {
        return this._catsService.findAll();
    }

    @Get(':id')
    findById(@Param('id', ParseUUIDPipe) id: number) {
        return this._catsService.findOne(id);
    }

    @Post()
    create(@Body() createCatDto: CreateCatDto) {
        return this._catsService.create(createCatDto);
    }

    @Put(':id')
    update(@Param() params: { id: string }, body: UpdateCatDTO) {
        return 'This action will update cat ' + JSON.stringify(body);
    }

    @Delete(':id')
    delete(@Param() params: { id: string }) {
        const { id } = params;
        return `This action will delete a #${id} cat`;
    }
}
