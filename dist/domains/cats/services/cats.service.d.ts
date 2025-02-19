import { ICat } from 'src/interface/cat.interface';
import { CreateCatDto } from '../dto/create-cat.dto';
export declare class CatsService {
    private readonly cats;
    findAll(): ICat[];
    findOne(id: number): ICat;
    create(cat: CreateCatDto): void;
}
