import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config'
import configuration from './config/configuration';
import { CatsModule } from './cats/cats.module';

@Module({
  imports: [
    CatsModule,
    ConfigModule.forRoot({
      load: [configuration]
    })
  ]
})

export class AppModule {}
