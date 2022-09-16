import { Component } from '@angular/core';
import { DataserviceService } from './service/dataservice.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  constructor(private dataService: DataserviceService) {}
  ngOnInit() {
    this.dataService.getUsers().subscribe((data) => {
      this.dataService.storeUsers(data);
    });
  }
}
