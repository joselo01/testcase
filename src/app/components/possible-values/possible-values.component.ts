import { Component, OnInit } from '@angular/core';
import { UserServices } from '../../services/users.service';
import { NgForm } from '@angular/forms';
import { Possible } from '../../interfaces/possible.interface';

@Component({
  selector: 'app-possible-values',
  templateUrl: './possible-values.component.html',
  styleUrls: ['./possible-values.component.scss']
})
export class PossibleValuesComponent implements OnInit {
  possible: Possible = {
    value: '',
    description: ''
    };

  constructor(private userServices: UserServices) { }

  ngOnInit() {
    this.userServices.getPossible().subscribe( possible => {
    });
  }

  OnGuardarPossible(myForm: NgForm) {
    this.userServices.addPossible(this.possible);
  }

}
