import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashbord',
  templateUrl: './dashbord.component.html',
  styleUrls: ['./dashbord.component.css']
})
export class DashbordComponent implements OnInit {

  constructor(private _router:Router) { }

  ngOnInit(): void {
  }

  gotoAbout(){
this._router.navigate(['about',101]);
  }
}
