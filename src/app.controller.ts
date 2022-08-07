import { Body, Controller, Delete, Get, Post, Put } from '@nestjs/common';

import { AppService } from './app.service';

@Controller('/app')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('/products')
  getProducts() {
    return this.appService.getProducts();
  }

  @Post('/products')
  postProducts(@Body() body) {
    const product = this.appService.addProduct(body);
    return product;
  }

  @Put('/products')
  putProducts(@Body() body) {
    const product = this.appService.updateProduct(body);
    return product;
  }

  @Delete('/products')
  deleteProducts(@Body() body) {
    const products = this.appService.removeProduct(body);
    return products;
  }
}
