import { Body, Controller, Delete, Get, HttpCode, HttpStatus, Param, Patch, Post, Query } from '@nestjs/common';
import { CatsService } from './cats.service';
import { CreateCatDto } from './dto/create-cat.dto';
import { UpdataCatDto } from './dto/updata-cat.dto';

@Controller('cats')
export class CatsController {
    constructor(private readonly catsService: CatsService) {}

    @Get('all')
    findAll(@Query() allQuery) {
        // const {page, size} = allQuery
        // return `all page:${page} size: ${size}`
        return this.catsService.findAll()
    }

    @Get('findone/:id')
    findOne(@Param('id') id: string) {
        // return `这是你的id:${id}`
        return this.catsService.findOne(id)
    }

    @Post()
    // @HttpCode(HttpStatus.FOUND)
    create(@Body() createCat: CreateCatDto) {
        console.log(createCat instanceof CreateCatDto)
        return this.catsService.create(createCat)
    }

    @Patch(':id')
    updata(@Param('id') id: string, @Body() updataCat: UpdataCatDto) {
        // return `updata${id}`
        return this.catsService.updata(id, updataCat)
    }

    @Delete(':id')
    deleteData(@Param('id') id: string) {
        // return `delete${id}`
        return this.catsService.remove(id)
    }
}
