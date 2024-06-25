import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ParentComponent } from './components-communication/input-output/parent/parent.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'components-ommunication' },

  {
    path: 'components-ommunication',
    loadChildren: () =>
      import(
        './components-communication/input-output/parent/parent.module'
      ).then((m) => m.ParentModule),
  },
  {
    path: 'components-communication-via-service',
    loadChildren: () =>
      import(
        './components-communication/via-service/parent/parent.module'
      ).then((m) => m.ParentModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
