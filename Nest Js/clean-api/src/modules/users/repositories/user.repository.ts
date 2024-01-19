
import { User } from '../entities/user.entity';
import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { UserRepository } from './user.repository.interface';

@Injectable()
export class UserRepositoryImpl implements UserRepository {
constructor(@InjectModel('User') private userModel: Model<User>) {}

async findAll(): Promise<User[]> {
return this.userModel.find().exec();
}

async findById(id: number): Promise<User | null> {
return this.userModel.findById(id).exec();
}

async create(user: User): Promise<User> {
const newUser = new this.userModel(user);
return newUser.save();
}

async update(id: number, user: User): Promise<User | null> {
return this.userModel.findByIdAndUpdate(id, user, { new: true }).exec();
}

async delete(id: number): Promise<boolean> {
const result = await this.userModel.deleteOne({ _id: id }).exec();
return result.deletedCount > 0;
}
}