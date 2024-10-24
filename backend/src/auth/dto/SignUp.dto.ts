import { IsEmail,IsString,IsBoolean,IsNotEmpty,MinLength, isBoolean, IsPhoneNumber } from "class-validator";

export class SignUpDto {

    @IsString()
    @IsNotEmpty()
    @MinLength(2)
    firstName: string;

    @IsString()
    @IsNotEmpty()
    @MinLength(2)
    lastName: string;

    @IsEmail({},{message: 'invalid email address'})
    @IsString()
    email: string;

    @IsString()
    @MinLength(6,{message: 'password should have atleast 6 characters'})
    @IsNotEmpty()
    password: string;

    @IsPhoneNumber('MW',{message: 'invalid phone number'})
    phoneNumber: string;

    @IsBoolean()
    isPropertyOwner: boolean;

    @IsBoolean()
    isEstateAgent: boolean;

}
