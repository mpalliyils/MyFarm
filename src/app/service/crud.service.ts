import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
@Injectable({
  providedIn: 'root'
})
export class CrudService {
  constructor(
    private firestore: AngularFirestore
  ) { }
  create_NewCattle(record) {
    return this.firestore.collection('cattle').add(record);
  }
  read_Cattle() {
    return this.firestore.collection('cattle').snapshotChanges();
  }
  update_Cattle(recordID, record) {
    this.firestore.doc('cattle/' + recordID).update(record);
  }
  // tslint:disable-next-line: variable-name
  delete_Cattle(record_id) {
    this.firestore.doc('cattle/' + record_id).delete();
  }
}
