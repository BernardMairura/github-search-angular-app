import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouteModule, Routes } from '@angular/router';
import { GitSearchService } from './git-search.service';
import { AppComponent } from './app.component';
import { ProfileComponent } from './profile/profile.component';
import { HomeComponent } from './home/home.component';
import { SearchFormComponent } from './search-form/search-form.component';

const routes:routes:Routes =[
  {path:"Home",component:HomeComponent},
  {path:"Profile",component:ProfileComponent}
  {path:"repository",component:repoComponent}
]



@NgModule({
  declarations: [
    AppComponent,
    ProfileComponent,
    HomeComponent,
    SearchFormComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    NgProgressModule.forRoot(),
    NgProgressHttpClientModule,
    RouterModule.forRoot(routes)
  ],
  providers: [GitSearchService],
  bootstrap: [AppComponent]
})
export class AppModule { }
