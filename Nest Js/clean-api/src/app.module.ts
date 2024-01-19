import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { UsersModule } from './modules/users/users.module';

@Module({
imports: [
MongooseModule.forRoot('mongodb://localhost/clean-api'),
UsersModule,
],
controllers: [],
providers: [],
})
export class AppModule {}
