import { IsEnum, MinLength,  } from "class-validator";

export class CreateNinjaDto {
    @MinLength(3)
    name:string;

    @IsEnum(['stars' , 'sword'],{message:'use only stars or sword'})
    weapon:'stars' | 'sword';
}
