import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { ICat } from 'src/interface/cat.interface';
import { CreateCatDto } from '../dto/create-cat.dto';

@Injectable()
export class CatsService {
    private readonly cats: ICat[] = [{ id: '1', name: 'cat 1', age: 1, breed: 'breed 1' }];

    findAll(): ICat[] {
        return this.cats;
    }

    findOne(id: number): ICat {
        const cat = this.cats.find(cat => cat.id === id.toString());

        if (!cat) throw new HttpException('Cat not found', HttpStatus.NOT_FOUND)
        return cat;
    }

    create(cat: CreateCatDto): void {
        const newId = this.cats.length + 1;
        this.cats.push({ id: newId.toString(), ...cat })
    }
}
