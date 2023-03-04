import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './main/main/main.component';

const routes: Routes = [{
  path: '',
  component: MainComponent
}, {
  path: 'plan',
  loadChildren: () => import('mfe1/Module').then(m => m.TableModule)
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
