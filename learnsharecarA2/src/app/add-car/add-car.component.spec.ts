/* tslint:disable:no-unused-variable */

import { By }           from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { addProviders, async, inject } from '@angular/core/testing';
import { AddCarComponent } from './add-car.component';

describe('Component: AddCar', () => {
  it('should create an instance', () => {
    let component = new AddCarComponent();
    expect(component).toBeTruthy();
  });
});
