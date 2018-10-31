import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LunchContainerComponent } from './containers/lunch-container/lunch-container.component';

const routes: Routes = [
  {path: "lunch", component: LunchContainerComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
