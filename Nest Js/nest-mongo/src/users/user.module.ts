import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose'; 
import { User, UserSchema } from 'src/schemas/User.schema';
import { UserService } from './users.service';
import { UserController } from './users.controller';
import { UserSettings, UserSettingsSchema } from 'src/schemas/UserSettings.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{
        name:User.name,
        schema:UserSchema,
    },
  {
    name:UserSettings.name,
    schema:UserSettingsSchema
  }])],
  controllers: [UserController],
  providers: [
    UserService
  ],
})
export class UserModule {}
