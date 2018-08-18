import { Component, OnInit } from '@angular/core';

import { GitSearchService } from '../git-search.service';
import { Repos } from '../repos';

@Component({
  selector: 'app-repo',
  templateUrl: './repo.component.html',
  providers:[GitSearchService],
  styleUrls: ['./repo.component.css']
})
export class RepoComponent implements OnInit {

    repos:Repos;

  constructor(private GitSearchService:GitSearchService) {
    this.GitSearchService.repoRequest()
    this.repos = this.GitSearchService.repos
  }

  ngOnInit() {
  }

}
