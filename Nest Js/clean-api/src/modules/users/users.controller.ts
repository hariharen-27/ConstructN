import { Controller, Get, Post, Put, Delete, Body, Param } from '@nestjs/common';
import { UserService } from './services/user.service';
import { User } from './entities/user.entity';
import { CreateUserDto } from './dto/create-user.dto';

@Controller('users')
export class UsersController {
constructor(private readonly userService: UserService) {}

@Get()
async findAll(): Promise<User[]> {
return this.userService.findAll();
}

@Get(':id')
async findById(@Param('id') id: number): Promise<User | null> {
return this.userService.findById(id);
}

@Post()
async create(@Body() createUserDto: CreateUserDto): Promise<User> {
const { username, email } = createUserDto;
const newUser = new User(Math.floor(Math.random() * 1000), username, email);
return this.userService.create(newUser);
}

@Put(':id')
async update(@Param('id') id: number, @Body() createUserDto: CreateUserDto): Promise<User | null> {
const { username, email } = createUserDto;
const updatedUser = new User(id, username, email);
return this.userService.update(id, updatedUser);
}

@Delete(':id')
async delete(@Param('id') id: number): Promise<boolean> {
return this.userService.delete(id);
}
}