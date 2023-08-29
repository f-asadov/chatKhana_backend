import { Module } from '@nestjs/common';
import { ThemesService } from './themes.service';
import { ThemesResolver } from './themes.resolver';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Theme } from 'src/entities/themes.entity';

@Module({
  imports:[TypeOrmModule.forFeature([Theme])],
  providers: [ThemesService, ThemesResolver]
})
export class ThemesModule {}
