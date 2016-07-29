import { Component, OnInit } from '@angular/core';
import { AddCarComponent } from '../add-car/add-car.component';

@Component({
  moduleId: module.id,
  selector: 'app-profile',
  templateUrl: 'profile.component.html',
  styleUrls: ['profile.component.css'],
  directives: [AddCarComponent]
})
export class ProfileComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
