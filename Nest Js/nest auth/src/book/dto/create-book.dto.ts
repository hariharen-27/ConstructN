import { User } from 'src/auth/schemas/user.schema';
import { Category } from '../schemas/book.schema';
import { IsEmpty, IsOptional } from 'class-validator';

export class CreateBookDto {
  @IsOptional()
  readonly title: string;
  @IsOptional()
  readonly description: string;
  @IsOptional()
  readonly author: string;
  @IsOptional()
  readonly price: number;
  @IsOptional()
  readonly category: Category;

  @IsEmpty({ message:"you are not allowed to create id"})
  readonly user: User;

}
