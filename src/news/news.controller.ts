import { Controller, Get, Param, Post, Body, Put, Delete } from '@nestjs/common';

@Controller('news')
export class NewsController {

    @Get()
   getUser() {
       return 'OK';
   }

   @Get(':id')
   getOneUser(@Param('id') id) {
       return 'OK';
   }

   @Post()
   postUser(@Body() body) {
       return 'OK';
   }

   @Put(':id')
   putUser(@Body() body, @Param('id') id) {
       return 'OK';
   }

   @Delete(':id')
   deleteUser(@Param('id') id) {
       return 'OK';
   }
}
