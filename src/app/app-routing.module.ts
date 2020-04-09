import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FilterComponent } from './filter/filter-component/filter.component';
import { ResultComponent } from './filter/result-component/result.component';

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
