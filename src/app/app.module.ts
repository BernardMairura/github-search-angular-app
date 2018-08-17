import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RoutingModule } from './routing/routing.module';
import { GitSearchService } from './git-search.service';
import { AppComponent } from './app.component';
import { ProfileComponent } from './profile/profile.component';
import { HomeComponent } from './home/home.component';
import { SearchFormComponent } from './search-form/search-form.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { RepoComponent } from './repo/repo.component';
import { NgProgressModule } from '@ngx-progressbar/core';
import { NgProgressHttpModule } from '@ngx-progressbar/http';

// const routes:Routes =[
//   {path:"home",component:HomeComponent},
//   {path:"profile",component:ProfileComponent},
//   {path:"repo",component:repoComponent},
//   {path:"",redirectTo:"/home,pathMatch:"full"},
//   {path:'**',component:PageNotFoundComponent}
// ]



@NgModule({
  declarations: [
    AppComponent,
    ProfileComponent,
    HomeComponent,
    SearchFormComponent,
    PageNotFoundComponent,
    RepoComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClient,
    RoutingModule,
    NgProgressModule.forRoot(),
    NgProgressHttpModule,

  ],
  providers: [GitSearchService],
  bootstrap: [AppComponent]
})
export class AppModule { }
