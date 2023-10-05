import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CategoriesComponent } from './pages/categories/categories.component';
import { LoginComponent } from './pages/login/login.component';
import { OrdersComponent } from './pages/orders/orders.component';
import { RestarantComponent } from './pages/restarant/restarant.component';

const routes: Routes = [
  {
    path:"", component:LoginComponent
  },
  {
    path:"categories", component:CategoriesComponent
  },
  {
    path:"login", component:LoginComponent
  },
  {
    path:"order", component:OrdersComponent
  },
  {
    path:"restaurant", component:RestarantComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
