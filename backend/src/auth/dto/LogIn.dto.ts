import { IsEmail,IsString,IsNotEmpty,MinLength } from "class-validator";


export class LogInDto{

    @IsEmail()
    @IsNotEmpty()
    @IsString()
    email: string;

    @IsNotEmpty()
    @MinLength(6,{message: 'password should have atleast 6 characters'})
    password: string;


}

