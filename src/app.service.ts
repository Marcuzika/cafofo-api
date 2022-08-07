import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  private readonly products = [
    {
      name: 'Razer 5000',
      price: '500.00',
      currency: 'R$',
    },
  ];

  getProducts() {
    return this.products;
  }

  addProduct(body) {
    const { name, price, currency } = body;

    this.products.push({
      name,
      price,
      currency,
    });

    return this.products[this.products.length - 1];
  }

  updateProduct(body) {
    const { id, name, price, currency } = body;

    this.products[id] = {
      name,
      price,
      currency,
    };

    return this.products[id];
  }

  removeProduct(body) {
    const { id } = body;

    delete this.products[id];

    return this.products;
  }
}
