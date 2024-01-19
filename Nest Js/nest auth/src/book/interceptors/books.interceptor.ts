import { CallHandler, ExecutionContext, Injectable, NestInterceptor } from "@nestjs/common";

import { Observable, map } from "rxjs";
import { Book } from "../schemas/book.schema";
import { plainToInstance } from "class-transformer";


@Injectable()
export class BookInterceptor implements NestInterceptor{
    intercept(context:ExecutionContext,next:CallHandler<Book[]>):Observable<any> | Promise<Observable<any>>{
        console.log(context.getClass().name);
        return next
        .handle()
        .pipe(map(data=>({data})))
        // .pipe(map((data)=>data.map((book)=>plainToInstance(Book,book))))
        // .pipe(map((data)=>{
        //     if(data && typeof data==='object'){
        //         const{description,...otherdata}=data;
        //         console.log("other data has been passed")
        //         return otherdata;
        //     }
        //     return data;
        // }))
        //.pipe(map((data)=>data.map((book)=>plainToInstance(Book,book))))
        
    }
}   