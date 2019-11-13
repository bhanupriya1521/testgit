import {NgModule} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { BrowserModule } from '@angular/platform-browser';
import { from } from 'rxjs';
import { HomeComponent } from './home.component';
import { ProductComponent } from './product/product.component';
import { Product1Component } from './product1/product1.component';
import { MyUpperPipe } from './product/myUpper.pipe';
import { DiscountPipe } from './product/MyDiscountPipe';
import { ProductSearchPipe } from './product/myfilter.pipe';




@NgModule({
    imports: [
        BrowserModule,
        FormsModule
        
    ],
    declarations: [
        AppComponent,
        HomeComponent,
        ProductComponent,
        Product1Component,
        MyUpperPipe,
        DiscountPipe,
        ProductSearchPipe
         

    
    ],
    providers: [],
    bootstrap: [
        AppComponent
    ]

})


export class AppModule {

}