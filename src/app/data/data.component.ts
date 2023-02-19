import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Animal } from './../models/animal.model';

@Component({
  selector: 'app-data',
  templateUrl: './data.component.html',
  styles: [`
    .datus {
      width: 100%;
      max-width: 350px;
    }
  `],
})
export class DataComponent implements OnInit {
  // animals$: Animal[] = [{
  //   name: "North american river otter",
  //   family: "mammal",
  //   image: "http://source.unsplash.com/random/1920x1080/?North American river otter",
  //   endangered: false,
  //   description: "Other specified injury of right quadriceps muscle, fascia and tendon, subsequent encounter",
  //   weight: 190
  // }]
  constructor(public afs: AngularFirestore) {
  }

  ngOnInit() {
    // this.afs.collection<Animal[]>('animals/').snapshotChanges()
  }
}
