import { Injectable } from '@nestjs/common';
import { CreateCatDto } from '../dto/create-cat.dto';
import { ICat } from 'src/interface/cat.interface';

@Injectable()
export class DogsService {
    private readonly dogs: ICat[] = [{ id: '1', name: 'dog 1', age: 1, breed: 'breed 1' }];

    findAll(): ICat[] {
        return this.dogs;
    }

    findOne(id: string): ICat {
        return this.dogs.find(dog => dog.id === id);
    }

    create(dog: CreateCatDto): void {
        const newId = this.dogs.length + 1;
        this.dogs.push({ id: newId.toString(), ...dog })
    }
}
