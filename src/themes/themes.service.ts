import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateThemeInput } from 'src/dto/create-theme.input';
import { Theme } from 'src/entities/themes.entity';
import { Repository } from 'typeorm/repository/Repository';


@Injectable()
export class ThemesService {

    constructor(@InjectRepository(Theme) private themeRepository:Repository<Theme>) {}

    async findAll() {
         return this.themeRepository.find()
    }

    async createTheme(createThemeInput:CreateThemeInput){
        const newTheme =  this.themeRepository.create(createThemeInput)

        return this.themeRepository.save(newTheme)
    }
}