import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';
import { ScrollingModule } from '@angular/cdk/scrolling';

import { DiscoverPage } from './discover.page';
import { DiscoverItemsScrollwindowComponent } from './discover-items-scrollwindow/discover-items-scrollwindow.component';

const routes: Routes = [
  {
    path: '',
    component: DiscoverPage,
  },
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ScrollingModule,
    RouterModule.forChild(routes),
  ],
  declarations: [DiscoverPage, DiscoverItemsScrollwindowComponent],
})
export class DiscoverPageModule {}
