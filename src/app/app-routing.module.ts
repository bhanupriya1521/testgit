import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductComponent } from './product/product.component';

import { ProductDetailsComponent } from './product/product-detail.component';
import { OrdersComponent } from './orders/orders.component';
import { HomeComponent } from './home/home.component';
import { RouterGaurds } from './product/product.routerGaurd';
import { NotFoundComponent } from './shared/notfound.component';

const routes: Routes = [
    {path: 'product',component:  ProductComponent },
    {path: 'product/:id', canActivate:[ RouterGaurds],component:  ProductDetailsComponent },
    {path: 'order',component:  OrdersComponent },
    {path: 'home',component:  HomeComponent },
    {path: '', redirectTo:'home', pathMatch: 'full'},
    {path: '**', component:NotFoundComponent}
    
];


@NgModule({
    imports: [
        RouterModule.forRoot(routes)
    ],
    providers: [
        RouterGaurds
    ],
    exports: [
        RouterModule
    ]
    
})

export class AppRoutingModule {

}