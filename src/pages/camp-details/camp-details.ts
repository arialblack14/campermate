import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Data } from '../../providers/data';

@Component({
  selector: 'page-camp-details',
  templateUrl: 'camp-details.html'
})
export class CampDetailsPage {

  constructor(public navCtrl: NavController, public formBuilder: FormBuilder, public dataService: Data) {}

  saveForm(): void {

  }

}
