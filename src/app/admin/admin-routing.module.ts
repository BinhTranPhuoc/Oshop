import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { AdminComponent } from './admin.component';
import { AuthGuardService } from '../core/auth-guard.service';

const routers: Routes = [
  {
    path: '',
    component: AdminComponent,
    canActivateChild: [AuthGuardService],
    children: [
      { path: '', redirectTo: 'admin/product', pathMatch: 'full' },
      {
        path: 'admin/product',
        // loadChildren: './components/admin/worktime.module#WorktimeModule'
      },
    ]
  }
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    [RouterModule.forChild(routers)],
  ],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
