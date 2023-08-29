import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { CreateThemeInput } from 'src/dto/create-theme.input';
import { Theme } from 'src/entities/themes.entity';
import { ThemesService } from './themes.service';

@Resolver(of => Theme)
export class ThemesResolver {
    constructor( private themesService:ThemesService){}


    @Query(returns => [Theme])
    allThemes():Promise<Theme[]>{
        return this.themesService.findAll()
    }


    @Mutation(returns => Theme)
    createTheme(@Args('createThemeInput') createThemeInput:CreateThemeInput){
        return this.themesService.createTheme(createThemeInput)
    }

}
