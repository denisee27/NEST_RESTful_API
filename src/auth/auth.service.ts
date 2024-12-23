import { Injectable } from '@nestjs/common';
// import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';
import { User } from 'src/users/entities/user.entity';
import { Repository } from 'typeorm';


@Injectable()
export class AuthService {
    constructor(
        // private readonly jwtService: JwtService,
        private readonly userRepository: Repository<User>
    ) {
        // this.jwtOptions = {

        //     secret: 'secretKey',

        //     verify: { algorithms: ['HS256'] }

        // };
    }

    async validateUser(email: string, password: string): Promise<any> {
        const user = await this.userRepository.findOneBy({ email });
        if (user && await bcrypt.compare(password, user.password)) {
            return user;
        }
        return null;
    }

    async login(user: any) {
        console.log(user);
        // const payload = { email: user.email, sub: user.id };
        // return {
        //     access_token: this.jwtService.sign(payload),
        // };
    }

}
