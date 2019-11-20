import {NgModule} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';


import { from } from 'rxjs';



import { HomeComponent } from './home/home.component';
import { ProductModule } from './product/product.module';
import { OrderModule } from './orders/order.module';
import { AppRoutingModule } from './app-routing.module';
import { NotFoundComponent } from './shared/notfound.component';




@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        HttpClientModule,
        AppRoutingModule,
        ProductModule,
        OrderModule

        
    ],
    declarations: [
        AppComponent,
        HomeComponent,
        NotFoundComponent
     
     ],
    providers: [
       
    ],
    bootstrap: [
        AppComponent
    ]

})


export class AppModule {

}