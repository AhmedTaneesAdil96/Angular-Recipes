import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChildComponent } from './child/child.component';
import { RouterModule, Routes } from '@angular/router';
import { ParentComponent } from './parent.component';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { ReactiveFormsModule } from '@angular/forms';

const routes: Routes = [
  {
    path: '',
    component: ParentComponent,
  },
];
@NgModule({
  declarations: [ChildComponent, ParentComponent],
  imports: [RouterModule.forChild(routes), CommonModule, ReactiveFormsModule],
})
export class ParentModule {}
