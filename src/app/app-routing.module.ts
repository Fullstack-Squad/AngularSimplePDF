import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ViewPdfComponent} from './view-pdf/view-pdf.component'

const routes: Routes = [
  { path: 'pdf', component:  ViewPdfComponent}
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports:[RouterModule]
})
export class AppRoutingModule { }
