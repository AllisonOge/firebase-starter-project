import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';
import { Animal } from './../models/animal.model';

@Component({
  selector: 'app-data',
  templateUrl: './data.component.html',
  styles: [`
    .grid-template-column {
      grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
      grid-gap: 1rem;
      padding: 10px;
    }
    .datus {
      width: 100%;
      max-width: 300px;
    }

    .img-container {
      height: 150px;
      background-color: #e0e0e0;
    }

    .img-container img {
      height: 100%;
      width: 100%;
      object-fit: cover;
    }
  `],
})
export class DataComponent implements OnInit {
  animals$: Observable<Animal[]>;
  constructor(public afs: AngularFirestore) {
  }

  ngOnInit() {
    this.animals$ = this.afs.collection<Animal>("animals").valueChanges()
  }
}
