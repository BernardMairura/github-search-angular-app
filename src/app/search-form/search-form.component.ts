import { Component, OnInit,Output,EventEmitter } from '@angular/core';

import { Profile } from '../profile-class/profile'


@Component({
  selector: 'app-search-form',
  templateUrl: './search-form.component.html',
  styleUrls: ['./search-form.component.css']
})
export class SearchFormComponent implements OnInit {
  username:string;
  username= new Username;

 findProfile(){
 this.username.emit(this.username);

  constructor() { }

  ngOnInit(){
  }

}
