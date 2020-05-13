import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OtherComponent } from './other/other.component';
import { RouterModule } from '@angular/router';


const routes = [
  {path: '',
  component: OtherComponent}
];

@NgModule({
  declarations: [OtherComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class OtherModule { }
