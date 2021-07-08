import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormComponent } from './form/form.component';
import { HomeComponent } from './home/home.component';
import { ProductComponent } from './product/product.component';
// khai báo khi dùng basic routing (HomeCom), khi dùng LazyLoadingModule thì không cần import (cần thêm file -routing.module.ts, module.ts) 
// import { ProductComponent } from './product/product.component';
// import { AddComponent } from './product/add/add.component';

const routes: Routes = [
  // base route: /
  { path: '', component: HomeComponent, children: [
    { path: 'product', component: ProductComponent }, // nested route
    // lazy-loading module: ko duoc load khi trang web vua load len
    { path: 'product/add',
      loadChildren: () => import('./product/add/add.module').then(m => m.AddProductModule)
    }
  ] },
  { path: 'regis' , component: FormComponent },
  { path: '**', redirectTo: '/', pathMatch: 'full'} // page not found
];  

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
