import { Controller, Get , Post ,Put , Delete, Param , Query, Body, NotFoundException, ParseIntPipe, ValidationPipe, UseGuards} from '@nestjs/common';
import { CreateNinjaDto } from './dto/create-ninja.dto';
import { UpdateNinjaDto } from './dto/update-ninja.dto';
import { NinjasService,addService } from './ninjas.service';
import { BeltGuard } from 'src/belt/belt.guard';

@UseGuards(BeltGuard)
@Controller('ninjas')
export class NinjasController {
    constructor(private readonly ninjasService: NinjasService){}

    @Get()
    getNinjas(@Query('weapon') weapon:'stars' | 'sword'){
        //const service=new NinjasService();
        return this.ninjasService.getNinjas(weapon);
    }

    @Get(':id')
    getOneNinjas(@Param('id',ParseIntPipe) id:number) {
        try{
        return this.ninjasService.getNinja(id)
}
catch(error){
    throw new NotFoundException;
}    }

    @Post()
    createNinjas(@Body(new ValidationPipe()) createNinjaDto:CreateNinjaDto){
        return this.ninjasService.createNinja(createNinjaDto)
    }

    @Put(':id')
    updateNinjas(@Param('id') id:string,@Body() updateNinjaDto:UpdateNinjaDto){
        return this.ninjasService.updateNinja(+id,updateNinjaDto)
    }

    @Delete(':id')
    removeNinjas(@Param('id') id:string){
        return this.ninjasService.removeNinja(+id);
    }
}

@Controller('add')
export class addController{
constructor(private readonly addService:addService){}
    @Get()
    getAdd(){
        return this.addService.getAdd()
    }

}
