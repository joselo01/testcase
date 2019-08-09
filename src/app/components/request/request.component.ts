import { Component, OnInit } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore';
import { Requests } from '../../interfaces/requests.interface';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-request',
  templateUrl: './request.component.html',
  styleUrls: ['./request.component.scss']
})
export class RequestComponent implements OnInit {
requests: AngularFirestoreCollection<Requests>;
requests$: Observable<Requests[]>;
  constructor(private afs: AngularFirestore) {
    this.requests = this.afs.collection('requests');
    this.requests$ = this.requests.valueChanges();
   }

  ngOnInit() {
    console.log('Request', this.requests$);
  }

}
