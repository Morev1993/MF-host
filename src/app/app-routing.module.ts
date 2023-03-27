import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './main/main/main.component';
import { loadRemoteModule } from '@angular-architects/module-federation';

const routes: Routes = [{
  path: '',
  component: MainComponent,
}, {
  path: 'plan',
  // loadChildren: () => import('mfe1/Module').then(m => m.TableModule),
  loadChildren: () =>
  loadRemoteModule({
      type: 'module',
      remoteEntry: 'http://localhost:4201/remoteEntry.js',
      exposedModule: './Module'
  })
  .then(m => m.TableModule)
}, {
  path: 'plan-foo',
  component: MainComponent,
  data: {

    reuseComponent: true,
  }
}, {
  path: 'plan-foo/:id',
  component: MainComponent,
  data: {

    reuseComponent: true,
  }
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
