import { CreateElephantDto } from '../dto/create-elephant.dto';
import { ICat } from 'src/interface/cat.interface';
export declare class ElephantsService {
    private readonly elephants;
    findAll(): ICat[];
    findOne(id: string): ICat;
    create(elephant: CreateElephantDto): void;
}
