import { Injectable } from '@nestjs/common';
import { User } from '../entities/user.entity';
import { UserRepository } from '../repositories/user.repository.interface';

@Injectable()
export class UserService {
constructor(private readonly userRepository: UserRepository) {}

async findAll(): Promise<User[]> {
return this.userRepository.findAll();
}

async findById(id: number): Promise<User | null> {
return this.userRepository.findById(id);
}

async create(user: User): Promise<User> {
return this.userRepository.create(user);
}

async update(id: number, user: User): Promise<User | null> {
return this.userRepository.update(id, user);
}

async delete(id: number): Promise<boolean> {
return this.userRepository.delete(id);
}
}