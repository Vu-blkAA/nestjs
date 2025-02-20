import { Injectable } from "@nestjs/common";
import { UserDto } from "../dto/user.dto";


@Injectable()
export class UserService {
    private readonly _user: UserDto[] = [{
        name: 'John',
        age: 20,
        phone: '1234567890'
    }, {
        name: 'Jane',
        age: 21,
        phone: '1234567890'
    }];


    getList() {
        return this._user;
    }
}
