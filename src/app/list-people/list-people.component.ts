import {Component} from '@angular/core';
import {PeopleService} from "../people.service";

@Component({
  selector: 'app-list-people',
  templateUrl: './list-people.component.html',
  styleUrls: ['./list-people.component.css']
})
export class ListPeopleComponent {

  people: any;

  constructor(private dataService: PeopleService) {
  }

  ngOnInit() {
    this.dataService.getData().subscribe((data: any) => {
      console.log("hello")
      this.people = data;
    });
  }
}
