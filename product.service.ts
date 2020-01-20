import { Injectable } from '@angular/core';
import { Product } from './product';

@Injectable()
export class ProductService {

   constructor() {}
   
   getAllProducts(){
      console.log(fetch('../../tslint.json', { method: "GET" }).then(response => response.json()));
      return fetch('../../tslint.json', { method: "GET" }).then(response => response.json())
   }

}
