import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ThemesResolver } from './themes.resolver';
import { ThemesService } from './themes.service';
import { Theme, ThemeSchema } from 'src/schemas/theme.schema';

@Module({
  imports:[MongooseModule.forFeature([{name:'theme',schema:ThemeSchema}])],
  providers: [ThemesService, ThemesResolver]
})
export class ThemesModule {}
