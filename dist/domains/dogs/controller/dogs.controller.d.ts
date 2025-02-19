import { ICat } from 'src/interface/cat.interface';
import { CreateCatDto, UpdateCatDTO } from '../dto/create-cat.dto';
import { DogsService } from '../services/dogs.service';
export declare class DogsController {
    private readonly _dogsService;
    constructor(_dogsService: DogsService);
    findAll(): ICat[];
    findById(params: {
        id: string;
    }): ICat;
    create(createCatDto: CreateCatDto): void;
    update(params: {
        id: string;
    }, body: UpdateCatDTO): string;
    delete(params: {
        id: string;
    }): string;
}
