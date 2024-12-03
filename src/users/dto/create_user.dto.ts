import { IsEmail, IsNotEmpty, MinLength, Validate } from 'class-validator';
import { User } from '../entities/user.entity';
export class CreateUserDto {
    @IsNotEmpty()
    @IsEmail() 
    @MinLength(3)
    @Validate(UniqueFieldValidator, [User, 'email'])
    email: string;
    @IsNotEmpty()
    name: string;
    @IsNotEmpty() 
    status: number;
    @IsNotEmpty()
    age: number;
}