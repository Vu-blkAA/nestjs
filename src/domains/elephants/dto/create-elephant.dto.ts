import { IsNumber, IsString } from "class-validator";

export class CreateElephantDto {
    @IsString()
    name: string;

    @IsNumber()
    age: number;

    @IsString()
    breed: string;
}


export class UpdateElephantDTO {
    @IsString()
    name: string;

    @IsNumber()
    age: number;
}
