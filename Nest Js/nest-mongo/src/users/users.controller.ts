import { Body, Controller, Get, Post, UsePipes, ValidationPipe ,Param, ParseIntPipe, Patch, HttpException, Delete} from "@nestjs/common";
import { UserService } from "./users.service";
import { CreateUserDto } from "./dto/CreateUser.dto";
import { UpdateUserDto } from "./dto/UpdateUser.dto";
import mongoose from "mongoose";


@Controller('users')
export class UserController {
constructor(private userService :UserService){}

    @Post()
    @UsePipes(new ValidationPipe())
    createUser(@Body() createUserDto:CreateUserDto){
        console.log(createUserDto);
        return this.userService.createUser(createUserDto)
    }

    @Get()
    getUser(){
        return this.userService.getUsers();
    }

    @Get(':id')
    async getOneUser(@Param('id') id: string) {
        const isValid = mongoose.Types.ObjectId.isValid(id);
        if (!isValid) throw new HttpException( 'User not found', 404);
        const findUser= await this.userService.getOneUser(id);
        if (!findUser) throw new HttpException( 'User not found',404);
        return findUser;
    }
    @Patch(':id')
    @UsePipes(new ValidationPipe())
    updateUser(@Param('id') id:string,@Body() updateUserDto:UpdateUserDto){
        const isValid = mongoose.Types.ObjectId.isValid(id);
        if (!isValid) throw new HttpException( 'Invalid id', 400);
        return this.userService.updateUser(id, updateUserDto)
    }
    @Delete(':id')
    async deleteUser(@Param('id') id: string) {
      const isValid = mongoose.Types.ObjectId.isValid(id);
      if (!isValid) throw new HttpException('Invalid ID', 400);
      const deletedUser = await this.userService.deleteUser(id);
      if (!deletedUser) throw new HttpException('User Not Found', 404);
      return;
}
}

