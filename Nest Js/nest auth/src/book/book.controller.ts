import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  Req,
  UseGuards,
  UseInterceptors,
} from '@nestjs/common';
import { BookService } from './book.service';
import { CreateBookDto } from './dto/create-book.dto';
import { UpdateBookDto } from './dto/update-book.dto';
import { Book } from './schemas/book.schema';
import { AuthGuard } from '@nestjs/passport';
import { BookInterceptor } from './interceptors/books.interceptor';

@Controller('books')
export class BookController {
  constructor(private bookService: BookService) {}

  @Get()
  @UseGuards(AuthGuard())
  @UseInterceptors(BookInterceptor)
  async getAllBooks(): Promise<Book[]> {
    console.log("inside controller")
    return this.bookService.findAll();
  }

  @Post()
  @UseGuards(AuthGuard())
  async createBook(@Body() book: CreateBookDto, @Req() req): Promise<any> {
    //console.log("controller"+book.title)
    // console.log(req)
    // console.log(req.user)
    return this.bookService.create(book,req.user);
  }

  @Get(':id')
  @UseGuards(AuthGuard())
  async getBook(
    @Param('id')
    id: string,
  ): Promise<Book> {
    return this.bookService.findById(id);
  }

  @Put(':id')
  @UseGuards(AuthGuard())
  async updateBook(
    @Param('id')
    id: string,
    @Body()
    book: UpdateBookDto,
    @Req() req
  ): Promise<Book> {
   // console.log(req);
    return this.bookService.updateById(id, book,req.user);
  }

  @Delete(':id')
  async deleteBook(
    @Param('id')
    id: string,
  ): Promise<Book> {
    return this.bookService.deleteById(id);
  }
}
