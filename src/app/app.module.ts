import { LazyLoad4Component } from './blog/lazy.components/lazy-load-4/lazy-load-4.component';
import { LazyLoad3Component } from './blog/lazy.components/lazy-load-3/lazy-load-3.component';
import { LazyLoad2Component } from './blog/lazy.components/lazy-load-2/lazy-load-2.component';
import { LazyLoad1Component } from './blog/lazy.components/lazy-load-1/lazy-load-1.component';
import { BlogComponent } from './blog/blog.component';
import { ContactComponent } from './contact/contact.component';
import { ProjectsComponent } from './projects/projects.component';
import { SplashComponent } from './splash/splash.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { ReactiveFormsModule } from '@angular/forms';

import { routing, appRoutingProviders } from './app.routing';

import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';

@NgModule({
  declarations: [
    AppComponent,
    BlogComponent,
    ContactComponent,
    DashboardComponent,
    ProjectsComponent,
    SplashComponent,
    LazyLoad1Component,
    LazyLoad2Component,
    LazyLoad3Component,
    LazyLoad4Component
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    routing
  ],
  providers: [
    appRoutingProviders
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
