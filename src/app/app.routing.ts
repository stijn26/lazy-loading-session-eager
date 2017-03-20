import { LazyLoad4Component } from './blog/lazy.components/lazy-load-4/lazy-load-4.component';
import { LazyLoad3Component } from './blog/lazy.components/lazy-load-3/lazy-load-3.component';
import { LazyLoad2Component } from './blog/lazy.components/lazy-load-2/lazy-load-2.component';
import { LazyLoad1Component } from './blog/lazy.components/lazy-load-1/lazy-load-1.component';
import { BlogComponent } from './blog/blog.component';
import { ProjectsComponent } from './projects/projects.component';
import { ContactComponent } from './contact/contact.component';
import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SplashComponent } from './splash/splash.component';

const appRoutes: Routes = [
  { path: '', component: SplashComponent },
  { path: 'blog', component: BlogComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'projects', component: ProjectsComponent },
  { path: 'comp1', component: LazyLoad1Component },
  { path: 'comp2', component: LazyLoad2Component },
  { path: 'comp3', component: LazyLoad3Component },
  { path: 'comp4', component: LazyLoad4Component },
  { path: '**', redirectTo: '', pathMatch: 'full' }
];

export const appRoutingProviders: any[] = [

];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
