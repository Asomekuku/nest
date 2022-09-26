import { HttpException, HttpStatus, Injectable, NotFoundException } from '@nestjs/common';
import { Cats } from './entities/cats.entity';

@Injectable()
export class CatsService {
    private cats: Cats[] = [{
        id: 123,
        name: 'zhangs',
        brand: 'af',
        flavors: ['ad', 'ad']
    }]

    findAll() {
        return this.cats
    }
    findOne(id: string) {
        const cat = this.cats.find(item => item.id === +id)
        if(!cat) {
            // throw new HttpException(`this ${id} is notfound`, HttpStatus.NOT_FOUND)
            // or
            throw new NotFoundException(`this ${id} is notfound`)
        }
        return cat
    }
    create(createCat: any) {
        this.cats.push(createCat)
        return createCat
    }
    updata(id: string, updataCat) {
        const findItem = this.findOne(id)
        if(findItem) {
            // const item = {...findItem, ...updataCat}
        }
    }
    remove(id: string) {
        const removeIdx = this.cats.findIndex(item => item.id === +id)
        if(removeIdx !== -1) {
            this.cats.splice(removeIdx, 1)
        }
    }
}
