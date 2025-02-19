import { CreateElephantDto, UpdateElephantDTO } from '../dto/create-elephant.dto';
import { ElephantsService } from '../services/elephants.service';
import { ICat } from 'src/interface/cat.interface';
export declare class ElephantsController {
    private readonly _elephantsService;
    constructor(_elephantsService: ElephantsService);
    findAll(): ICat[];
    findById(params: {
        id: string;
    }): ICat;
    create(createElephantDto: CreateElephantDto): void;
    update(params: {
        id: string;
    }, body: UpdateElephantDTO): string;
    delete(params: {
        id: string;
    }): string;
}
