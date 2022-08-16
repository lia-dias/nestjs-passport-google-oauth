import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { GoogleAuthController } from './google.controller';
import GoogleAuthService from './google.service';
import { GoogleStrategy } from './strategies/google.strategy';

@Module({
  imports: [ConfigModule.forRoot({
    envFilePath: ['auth.env', 'app.env'],
  })],
  controllers: [GoogleAuthController],
  providers: [GoogleAuthService, GoogleStrategy],
})
export default class GoogleAuthModule {}
