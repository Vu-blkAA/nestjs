import { CreateCatDto } from '../dto/create-cat.dto';
import { ICat } from 'src/interface/cat.interface';
export declare class DogsService {
    private readonly dogs;
    findAll(): ICat[];
    findOne(id: string): ICat;
    create(dog: CreateCatDto): void;
}
