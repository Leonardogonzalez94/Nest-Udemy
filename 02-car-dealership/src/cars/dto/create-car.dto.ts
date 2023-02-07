import {IsString} from 'class-validator';


export class createCarDto{
    @IsString({ message: `The brand most be a cool string`})
    readonly brand: string;
    @IsString()
    readonly model: string;
}