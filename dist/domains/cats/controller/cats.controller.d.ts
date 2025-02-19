import { ICat } from 'src/interface/cat.interface';
import { CreateCatDto, UpdateCatDTO } from '../dto/create-cat.dto';
import { CatsService } from '../services/cats.service';
export declare class CatsController {
    private readonly _catsService;
    constructor(_catsService: CatsService);
    findAll(): ICat[];
    findById(id: number): ICat;
    create(createCatDto: CreateCatDto): void;
    update(params: {
        id: string;
    }, body: UpdateCatDTO): string;
    delete(params: {
        id: string;
    }): string;
}
