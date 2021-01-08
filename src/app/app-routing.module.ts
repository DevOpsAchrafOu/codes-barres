import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'bar-code',
    loadChildren: () => import('./pages/bar-code/bar-code.module').then( m => m.BarCodePageModule)
  },
  {
    path: "",
    redirectTo: "bar-code",
    pathMatch: "full",
  },
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
