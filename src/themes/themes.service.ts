import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { log } from 'console';
import { Model } from 'mongoose';
import { CreateThemeInput } from 'src/dto/create-theme.input';
import { Theme } from 'src/schemas/theme.schema';


@Injectable()
export class ThemesService {

    constructor(@InjectModel('theme') private readonly themeModel: Model<Theme>) { }

    async findAll() {
        return await this.themeModel.find()
    }

    async createTheme(createThemeInput: CreateThemeInput) {
        const newTheme = new this.themeModel({ themeName: createThemeInput.themeName, themeTags: createThemeInput.themeTags })
        console.log(newTheme)
        
        try{
            await newTheme.save()
            return newTheme
        }
        catch(err){
            console.log(2)
            console.log(err)
        }
       

       
    }
}