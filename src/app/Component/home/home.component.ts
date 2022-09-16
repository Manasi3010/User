import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DataserviceService } from 'src/app/service/dataservice.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  // variables
  users: any = [];

  constructor(public router: Router, private dataservice: DataserviceService) {}

  ngOnInit() {
    this.dataservice.getUsers().subscribe((data) => {
      this.users = data;
    });
  }

  deleterow(val: any) {
    let Index = this.users.findIndex((x: any) => x.id == val);
    this.users.splice(Index, 1);
    this.dataservice.storeUsers(this.users);
  }
}
