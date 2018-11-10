import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: './home/home.module#HomePageModule'
  },
  {
    path: 'list',
    loadChildren: './list/list.module#ListPageModule'
  },
  {
    path: 'mobile-apps',
    loadChildren: './mobile-apps/mobile-apps.module#MobileAppsPageModule'
  },
  { path: 'blog', loadChildren: './blog/blog.module#BlogPageModule' },
  { path: 'resume', loadChildren: './resume/resume.module#ResumePageModule' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
