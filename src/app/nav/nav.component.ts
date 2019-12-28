import { Component, OnInit } from '@angular/core';
import { Ng4LoadingSpinnerModule } from 'ng4-loading-spinner'

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  constructor(private loader:Ng4LoadingSpinnerModule) { }

  ngOnInit() {
  }

}
