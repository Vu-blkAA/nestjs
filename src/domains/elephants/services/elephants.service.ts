import { Injectable } from '@nestjs/common';
import { CreateElephantDto } from '../dto/create-elephant.dto';
import { ICat } from 'src/interface/cat.interface';

@Injectable()
export class ElephantsService {
    private readonly elephants: ICat[] = [{ id: '1', name: 'elephant 1', age: 1, breed: 'breed 1' }];

    findAll(): ICat[] {
        return this.elephants;
    }

    findOne(id: string): ICat {
        return this.elephants.find(elephant => elephant.id === id);
    }

    create(elephant: CreateElephantDto): void {
        const newId = this.elephants.length + 1;
        this.elephants.push({ id: newId.toString(), ...elephant })
    }
}
