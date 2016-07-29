import { Component, OnInit } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'app-add-car',
  templateUrl: 'add-car.component.html',
  styleUrls: ['add-car.component.css']
})
export class AddCarComponent {

  constructor() { }
  
  car: Car = {
    id: 0,
    name: '',
    description: 'description'
  };

  showCar() {
    var x = document.getElementById("car");
    if (x.className.indexOf("w3-show") == -1) {
        x.className += " w3-show";
        x.previousElementSibling.className += " w3-theme-d1";
    } else { 
        x.className = x.className.replace("w3-show", "");
        x.previousElementSibling.className = 
        x.previousElementSibling.className.replace(" w3-theme-d1", "");
    }
  }

}
export class Car {
  id: number;
  name: string;
  description: string;
}