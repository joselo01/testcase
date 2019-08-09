import { Component, OnInit } from '@angular/core';
import { User } from '../../interfaces/user.interface';
import { UserServices } from '../../services/users.service';
import { Possible } from '../../interfaces/possible.interface';
import { NgForm } from '@angular/forms';
@Component({
  selector: 'app-manager',
  templateUrl: './manager.component.html',
  styleUrls: ['./manager.component.scss']
})
export class ManagerComponent implements OnInit {
possible: Possible[];
user: User[];
editState = false;
userToEdit: User;
  constructor(private userServices: UserServices) { }

  ngOnInit() {
    this.userServices.getUser().subscribe( user => {
      // console.log('Cargando', user);
      this.user = user;
    });

    this.userServices.getPossible().subscribe( possible => {
      this.possible = possible;
  });







  }

  editUser(event, user: User) {
    this.editState = true;
    this.userToEdit = user;
  }

  OnUpdateUser(user: User) {
    this.userServices.updateUser(user);
    this.clearState();
  }

  clearState() {
    this.editState = false;
    this.userToEdit = null;
  }

}
