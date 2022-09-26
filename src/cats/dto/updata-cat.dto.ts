import { PartialType } from '@nestjs/mapped-types'
import { CreateCatDto } from './create-cat.dto';

// PartialType 把传入类型全转为可选以及继承了字段的校验
export class UpdataCatDto extends PartialType(CreateCatDto) {}
