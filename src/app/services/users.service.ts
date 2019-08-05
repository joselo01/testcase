import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from 'angularfire2/firestore';
import { User } from '../interfaces/user.interface';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Possible } from '../interfaces/possible.interface';
@Injectable ({
  providedIn: 'root'
})

export class UserServices {

  userCollection: AngularFirestoreCollection<User>;
  user: Observable<User[]>;
  userDoc: AngularFirestoreDocument<User>;

  possibleCollection: AngularFirestoreCollection<Possible>;
  possible: Observable<Possible[]>;

  constructor( public afs: AngularFirestore) {
    // this.user = afs.collection('user').valueChanges();
    this.possible = afs.collection('possible').valueChanges();
    this.possibleCollection = afs.collection<User>('possible');
    this.userCollection = afs.collection<User>('user');
    this.user = this.userCollection.snapshotChanges().pipe(
      map(actions => actions.map (a => {
        const data = a.payload.doc.data() as User;
        const id = a.payload.doc.id;
        return { id, ...data };
      }))
    );
  }

  getUser() {
    return this.user;
  }

  addUser(user: User) {
    this.userCollection.add(user);
  }

  updateUser(user: User) {
    this.userDoc = this.afs.doc(`user/${user.id}`);
    this.userDoc.update(user);
  }

  getPossible() {
    return this.possible;
  }

  addPossible(possible: Possible) {
    this.possibleCollection.add(possible);
  }

}
