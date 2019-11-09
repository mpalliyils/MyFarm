import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { CattleRegistrationPage } from './cattle-registration.page';

const routes: Routes = [
  {
    path: '',
    component: CattleRegistrationPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [CattleRegistrationPage]
})
export class CattleRegistrationPageModule {}
