import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetailComponent } from './Component/detail/detail.component';
import { HomeComponent } from './Component/home/home.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: '', component: HomeComponent },
  { path: 'details/:id', component: DetailComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { enableTracing: true })],
  exports: [RouterModule],
})
export class AppRoutingModule {}
