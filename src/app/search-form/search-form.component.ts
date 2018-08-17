import { Component, OnInit } from '@angular/core';
import { GitSearchService } from '../git-search.service'
import { Profile } from '../profile-class/profile'


@Component({
  selector: 'app-search-form',
  templateUrl: './search-form.component.html',
  providers:[GitSearchService],
  styleUrls: ['./search-form.component.css']
})
export class SearchFormComponent implements OnInit {
  username:string;

  constructor(private GitSearchService:GitSearchService) { }

  findProfile(){
  this.GitSearchService.updateProfile(this.username);
}
  ngOnInit(){
  }

}
