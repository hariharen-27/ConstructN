import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Exclude, plainToInstance } from 'class-transformer';
import mongoose from 'mongoose';
import { User } from 'src/auth/schemas/user.schema';


export enum Category {
  ADVENTURE = 'Adventure',
  CALSSICS = 'Classics',
  CRIME = 'Crime',
  FANTASY = 'Fantasy',
}

@Schema({
  timestamps: true,
})
export class Book {
  @Prop()
  title: string;

  @Exclude()
  @Prop()
  description: string;

  @Prop()
  author: string;

  @Prop()
  price: number;

  @Prop()
  category: Category;

  @Prop({ type: mongoose.Schema.Types.ObjectId, ref:'User'})
  user :User
}

export const BookSchema = SchemaFactory.createForClass(Book);
