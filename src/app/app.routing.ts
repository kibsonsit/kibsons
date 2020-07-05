import { Routes, RouterModule, PreloadAllModules } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';
import {AuthGuardService} from './guards/auth-guard.service';
import { PagesComponent } from './pages/pages.component';
import { BlankComponent } from './pages/blank/blank.component';
import { NotFoundComponent } from './pages/errors/not-found/not-found.component';
import { ErrorComponent } from './pages/errors/error/error.component';
import { TestComponent } from './pages/test/test.component';
// import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { AddressdetailsComponent } from './pages/addressdetails/addressdetails.component';
import { ShoppingComponent } from './pages/shopping/shopping.component';
import { ProductDetailsComponent } from './pages/productdetails/productdetails.component';
import { MyWishListComponent } from './pages/mywishlist/mywishlist.component';
import { MyShopCartComponent } from './pages/myshopcart/myshopcart.component';
import { ConfirmOrderComponent } from './pages/confirmorder/confirmorder.component';
import { PayMyCartComponent } from './pages/paymycart/paymycart.component';
import { HomeComponent } from './pages/home/home.component';
import { AboutusComponent } from './pages/aboutus/aboutus.component';
import { KibsonscaresComponent } from './pages/kibsonscares/kibsonscares.component';


export const routes: Routes = [
    {
        path: '',
        component: PagesComponent, children: [
            { path: 'address', component: AddressdetailsComponent, canActivate: [AuthGuardService], data: { breadcrumb: 'Address Details' } },
            // { path: 'test', component: TestComponent, data: { breadcrumb: 'Test' } },
            { path: 'home', component: HomeComponent,  data: { breadcrumb: 'Home', PageScrolled: false} },
            { path: 'aboutus', component: AboutusComponent,  data: { breadcrumb: 'About Us', PageScrolled: false} },
            { path: 'kibsonscares', component: KibsonscaresComponent,  data: { breadcrumb: 'Kibsons Cares', PageScrolled: false} },
            { path: 'shopping', component: ShoppingComponent,  data: { breadcrumb: 'Shopping', PageScrolled: false} },
            { path: '', component: ShoppingComponent, data: { breadcrumb: 'Shopping' } },
            { path: 'myshopcart', component: MyShopCartComponent, canActivate: [AuthGuardService], data: { breadcrumb: 'My Shopping Cart' } },
            { path: 'confirmorder', component: ConfirmOrderComponent, canActivate: [AuthGuardService], data: { breadcrumb: 'Confirm Order' } },
            { path: 'paymycart', component: PayMyCartComponent, canActivate: [AuthGuardService], data: { breadcrumb: 'Pay My Cart' } },
            { path: 'mywishlist', component: MyWishListComponent, data: { breadcrumb: 'My Wish List' } },
            { path: 'productdetails', component: ProductDetailsComponent, data: { breadcrumb: 'Product Details' } },
            // { path: 'blank', component: BlankComponent, canActivate: [AuthGuardService]},
            // { path: 'login', component: LoginComponent ,  data: { breadcrumb: 'Login page' } },
            { path: 'register', component: RegisterComponent ,  data: { breadcrumb: 'User Registration page' } },
        ]
    },
    // { path: 'login', component: LoginComponent ,  data: { breadcrumb: 'Login page' } },
    // { path: 'register', component: RegisterComponent ,  data: { breadcrumb: 'User Registration page' } },
    { path: 'error', component: ErrorComponent, data: { breadcrumb: 'Error' } },
    { path: 'test', component: TestComponent, data: { breadcrumb: 'Test' } },
    { path: '**', component: NotFoundComponent }
];


export const routing: ModuleWithProviders = RouterModule.forRoot(routes, {
});

