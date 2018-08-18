import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import {environment} from '../environments/environment'
import { Profile } from './profile-class/profile';
import { Repos } from './repos';
// import { SearchFormComponent } from './search-form/search-form';
// import { Username } from './username'

@Injectable({
  providedIn: 'root'
})
export class GitSearchService {

   private username:string;
   // private apiRepos:string;
   profile:Profile;
   repos:Repos;

  constructor(private http:HttpClient) {
    this.profile = new Profile("","","","","",0,0,0);
    this.repos = new Repos("","","");
    // this.apiRepos= '/repos';
    this.username = 'wanguinjoka';
  }
    // updateProfile(username:string){
    //     this.username = username

          profileRequest(){

               interface ApiResponse{
                 avatar_url:string;
                  name:string;
                  url:string;
                  bio:string;
                  location:string;
                  public_repos:number;
                  followers:number;
                  following:number
               }

              let promise = new Promise((resolve,reject)=>{
                this.http.get<ApiResponse>(environment.apiUrl+this.username+environment.apiKey).toPromise().then(response=>{
                  this.profile.avatar_url=response.avatar_url
                  this.profile.name=response.name
                  this.profile.url=response.url
                  this.profile.bio=response.bio
                  this.profile.location=response.location
                  this.profile.public_repos=response.public_repos
                  this.profile.followers=response.followers
                  this.profile.following=response.following

                resolve()
                 },
                 error =>{
                   this.profile.name = "Unable to get user"
                   reject(error)
                 }
               )
             })
                 return promise
               }
               // updateProfile(username:string){
               //        this.username=username;

          repoRequest(){
            interface ApiResponse{
                 name:string;
                  description:string;
                  html_url:string;

                 }

              let promise = new Promise((resolve,reject)=>{
                this.http.get<ApiResponse>(environment.apiUrl+ this.username + environment.apiRepos).toPromise().then(response=>{
                  this.repos.name=response.name
                  this.repos.description=response.description
                  this.repos.html_url=response.html_url

                resolve()
                 },
                 error =>{
                   this.repos.name = "Unable to get Repos"
                   reject(error)
                 }
               )
             })
                 return promise
               // }
               // updateProfile(username:string){
               //        this.username=username;


             }


             }
