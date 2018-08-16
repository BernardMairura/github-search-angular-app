import { Injectable } from '@angular/core';
import { Http, Header } from '@angular/http';
import 'rxjs/add/operator/maps';

@Injectable({
  providedIn: 'root'
})
export class GitSearchService {

   private username='string',
   private clientsecret='227b075f172f9ba7715226bf57012060566ebdfa';


  constructor(private http:Http) {
  console.log=('service is ready');
  this.username="wanguinjoka" }

  getProfileInfo(){
    return this.http.get("https://api.github.com/users/")
  }
}
