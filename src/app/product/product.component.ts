import { Component,OnInit,OnChanges,OnDestroy } from '@angular/core';
import { IProduct} from './product.model';
import { ProductService } from './product.service';


@Component ({
    selector: 'app-product',
    templateUrl: './product.component.html',
   // styles: ['thead{color:teal}','td{color:tomato']
   styleUrls: ['./product.component.css']

})

export class ProductComponent implements OnInit, OnChanges, OnDestroy{
    title= 'Products App';
    showTable=true;
    showImage=false;
    imageWidth =100;
    userInput;
    serverStatus='offline';
    products: IProduct[];

    constructor(private productService: ProductService) {
      console.log('>>>>>>>>constructor<<<<<<<<<<');
      this.serverStatus=Math.random() < 0.5?'Online' : 'Offline';
    }

    ngOnChanges() {
        console.log('>>>>>>>>ngOnChanges<<<<<<<<<<');

    }

    ngOnInit() {
      console.log('>>>>>>>>ngOnInit<<<<<<<<<<');
     // this.products = this.productService.getProduct();
     this.productService.getProduct()
     .subscribe((data) => this.products = data);
    }

    ngOnDestroy() {
      console.log('>>>>>>>>ngOnDestroy<<<<<<<<<<');
    }


    
    //products: IProduct[];

    toggleImage(): void {
        this.showImage = !this.showImage;
    }

    getColor() {
      return this.serverStatus =='Online' ? 'green' : 'red';
    }

    dataReceive(message:string) {
      this.title = 'Products listing>>>>>>>' +message;
    }

}
