import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {
  public searchString: string;

  constructor(
    private router: Router
  ) { }

  ngOnInit() {
    this.searchString = '';
  }

  search() {
    if (this.searchString.length) {
      this.router.navigate(['/search', this.searchString]);
    }
  }

}
