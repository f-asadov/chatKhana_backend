import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { HydratedDocument } from "mongoose";

export type ThemeDocument = HydratedDocument<Theme>;

@Schema()
export class Theme{

    @Prop()
    themeName:string

    @Prop([String])
    themeTags?: string[]
}

export const ThemeSchema = SchemaFactory.createForClass(Theme);