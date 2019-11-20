import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { AppRoutingModule } from '../app-routing.module';


import { OrdersComponent } from './orders.component';
import { OrderpipePipe } from './orderpipe.pipe';




@NgModule ({
    imports: [
        SharedModule,
        
        AppRoutingModule
      


    ],
    declarations: [
        OrdersComponent,
        OrderpipePipe,
    ]

})

export class OrderModule {

}