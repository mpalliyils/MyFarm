import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';
import { Tab2Page } from '../tab2/tab2.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'tab1',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../tab1/tab1.module').then(m => m.Tab1PageModule)
          }
        ]
      },
       {path: 'tab2',
        children: [
          {
            path: '', loadChildren: () =>
            import('../tab2/tab2.module').then(m => m.Tab2PageModule)
          },
          {
              path: 'cattle-registration',
              loadChildren: './tab2/cattle-registration/cattle-registration.module#CattleRegistrationPageModule'
            },
            {
              path: 'cattle-list',
              loadChildren: './tab2/cattle-list/cattle-list.module#CattleListPageModule'
            },
            {
              path: 'cattle-update',
              loadChildren: './tab2/cattle-update/cattle-update.module#CattleUpdatePageModule'
          }
        ]
      },
      {
        path: 'tab3',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../tab3/tab3.module').then(m => m.Tab3PageModule)
          }
        ]
      },
      {
        path: '',
        redirectTo: '/tabs/tab1',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/tabs/tab1',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TabsPageRoutingModule {}
