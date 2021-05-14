import { AppComponent } from './app.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetailsComponent } from './details/details.component';
import { PaymentComponent } from './payment/payment.component';

const routes: Routes = [
  // {
  //   path:'', redirectTo: '/app', pathMatch: 'full',
  //   component: AppComponent
  // },
  {
    path:'details',
    component: DetailsComponent
  },
  {
    path:'payment',
    component: PaymentComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
