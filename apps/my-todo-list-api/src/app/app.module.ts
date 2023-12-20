import { Module } from '@nestjs/common';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import {TodosApiModule} from "@my-todo-list/todos-api";

@Module({
  imports: [TodosApiModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
