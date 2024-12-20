import { IsEmail, IsNotEmpty, MinLength } from 'class-validator';
// import { User } from '../entities/user.entity';
export class CreateUserDto {
    @IsNotEmpty()
    @IsEmail() 
    @MinLength(3)
    // @Validate(UniqueValidator, ['email', User]) 
    email: string;
    @IsNotEmpty()
    name: string;
    @IsNotEmpty() 
    status: number;
    @IsNotEmpty()
    age: number;
}