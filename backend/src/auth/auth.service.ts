import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  private readonly user = {
    email: 'vendedor01@loja.com',
    password: '123456',
    id: '1',
  };

  constructor(private readonly jwtService: JwtService) {}

  login(email: string, password: string) {
    if (email !== this.user.email) {
      throw new UnauthorizedException('Usuário não encontrado');
    }
    if (password !== this.user.password) {
      throw new UnauthorizedException('Senha incorreta');
    }

    const payload = { email: this.user.email, sub: this.user.id };
    return {
      access_token: this.jwtService.sign(payload),
    };
  }
}
