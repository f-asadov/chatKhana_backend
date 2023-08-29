import { Field, InputType } from "@nestjs/graphql";

@InputType()
export class CreateThemeInput{

    @Field()
    themeName:string;
    @Field(type => [String],{nullable:true})
    themeTags?:string[]
}