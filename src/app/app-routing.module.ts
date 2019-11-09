import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
  { path: 'cattle-registration', loadChildren: './tab2/cattle-registration/cattle-registration.module#CattleRegistrationPageModule' },
  { path: 'cattle-list', loadChildren: './tab2/cattle-list/cattle-list.module#CattleListPageModule' },
  { path: 'cattle-update', loadChildren: './tab2/cattle-update/cattle-update.module#CattleUpdatePageModule' }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
