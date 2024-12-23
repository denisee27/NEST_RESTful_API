import { Module } from '@nestjs/common';
// import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
// import { PassportModule } from '@nestjs/passport';
// import { JwtModule } from '@nestjs/jwt';
import { JwtStrategy } from './jwt.strategy';
import { PassportModule } from '@nestjs/passport';
import { JwtModule } from '@nestjs/jwt';

@Module({
  imports: [
    PassportModule.register({ defaultStrategy: 'jwt' }),
    JwtModule.register({
      secret: '7a3094f2cade372a6ecbf63d01043c1cceb2ad6090d02d358202d6e6b92bba0ea3c14976a69daf186896ca3da558f3748f4b892fff08adcf62d58f062d2d54f0', // Ganti dengan secret key yang lebih aman
      signOptions: { expiresIn: '24h' },
    }),
  ],
  providers: [JwtStrategy],
  controllers: [AuthController],
  exports: [JwtModule, PassportModule]

})
export class AuthModule {}
