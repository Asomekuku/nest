import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(new ValidationPipe({
    whitelist: true, // 白名单，把客户端多余的字段自动排除。只返回定义的字段
    forbidNonWhitelisted: true, // 配合whitelist使用 作用于客户端传值多余字段进行抛错处理
    //transform: true, // 帮助我们类型转换成所期望的类型 如get请求过来的id原本为string 在方法形参定义为number 就会帮我们自动转换，会有性能影响
  }));
  await app.listen(3000);
}
bootstrap();
// nest g co 创建controller
// nest g s 创建service
// nest g module 创建module

//npm install class-validator npm install class-transformer 校验参数
// npm i @nestjs/mapped-types
