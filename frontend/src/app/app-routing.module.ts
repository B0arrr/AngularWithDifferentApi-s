import {NgModule} from '@angular/core';
import {RouterModule, Routes} from "@angular/router";

const expressModule = () =>
  import('./components/expressAPI/express.module').then((x) => x.ExpressModule);

const minimalModule = () =>
  import('./components/minimalAPI/minimal.module').then((x) => x.MinimalModule);

const fastModule = () =>
  import('./components/fastAPI/fast.module').then((x) => x.FastModule);

const routes: Routes = [
  {path: 'express', loadChildren: expressModule},
  {path: 'minimal', loadChildren: minimalModule},
  {path: 'fast', loadChildren: fastModule}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
