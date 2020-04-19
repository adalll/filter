import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FilterComponent } from './views/filter-component/filter.component';
import { ResultComponent } from './views/result-component/result.component';

const routes: Routes = [
  { path: '', component: FilterComponent, children: [
      { path: 'result', component: ResultComponent }
    ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule {
}
