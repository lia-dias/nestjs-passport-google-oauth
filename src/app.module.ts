import { Module } from '@nestjs/common';
import GoogleAuthModule from './modules/auth/google.module';

@Module({
  imports: [GoogleAuthModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
