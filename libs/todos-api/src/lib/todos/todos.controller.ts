import {Controller, Get} from '@nestjs/common';

@Controller('todos')
export class TodosController {
  @Get()
  public getTodos(){
    return ['Todo1, Todo2'];
  }
}
