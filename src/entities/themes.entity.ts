import { Field, Int, ObjectType } from "@nestjs/graphql";
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";


@Entity()
@ObjectType()
export class Theme {

    @PrimaryGeneratedColumn()
    @Field(type => String)
    _id: string;

    @Column()
    @Field()
    themeName: string;

    @Column('jsonb',{nullable:true})
    @Field(type => [String], { nullable: true })
    themeTags?: string[]
}