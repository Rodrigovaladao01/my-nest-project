import { User } from '../entities/user.entity';
import {
    IsEmail,
    IsString,
    Matches,
    MaxLength,
    MinLength,
} from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateUserDto extends User {
    @ApiProperty({ description: 'E-mail que será utilizado para logar', example: 'email@email.com', })
    @IsEmail()
    email: string;

    @IsString()
    @MinLength(4)
    @MaxLength(20)
    @Matches(/((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/, {
        message: 'password too weak',
    })
    @ApiProperty({ description: 'A senha deve conter pelo menos 1 letra maiúscula, 1 letra minúscula, 1 número e 1 caractere especial', example: 'Abc@123', })
    password: string;

    @ApiProperty({ description: 'o nome é utilizado para identificar o usuário', example: 'João da Silva', })
    @IsString()
    name: string;
}
