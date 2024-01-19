import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { UsersController } from './users.controller';
import { UserService } from './services/user.service';
import { UserRepositoryImpl } from './repositories/user.repository';
import { UserSchema } from './schemas/user.schema';

@Module({
imports: [MongooseModule.forFeature([{ name: 'User', schema: UserSchema }])],
controllers: [UsersController],
providers: [UserService, UserRepositoryImpl],

})
export class UsersModule {}