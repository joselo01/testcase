import { Component, OnInit } from '@angular/core';
import { User } from '../../interfaces/user.interface';
import { UserServices } from '../../services/users.service';
import { NgForm } from '@angular/forms';


@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {
  user: User = {
    namekey: '',
    description: '',
    type: '',
    sensitivity: ''
    };


  constructor(private userServices: UserServices) {
  }

  ngOnInit() {
    this.userServices.getUser().subscribe( user => {
    });
  }

  OnGuardarUser(myForm: NgForm) {
    this.userServices.addUser(this.user);
  }
}
