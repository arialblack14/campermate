import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Data } from '../../providers/data';

@Component({
  selector: 'page-camp-details',
  templateUrl: 'camp-details.html'
})
export class CampDetailsPage {
  campDetailsForm: FormGroup;

  constructor(public navCtrl: NavController, public formBuilder: FormBuilder, public dataService: Data) {
    this.campDetailsForm = formBuilder.group({
      gateAccessCode: [''],
      ammenitiesCode: [''],
      wifiPassword: [''],
      phoneNumber: [''],
      departure: [''],
      notes: ['']
    })
  }

  saveForm(): void {
    let data = this.campDetailsForm.value;
    // this.dataService.setCampDetails(data);
  }

}
