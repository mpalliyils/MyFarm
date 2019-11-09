import { Component, OnInit } from '@angular/core';
import { CrudService } from 'src/app/service/crud.service';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-cattle-update',
  templateUrl: './cattle-update.page.html',
  styleUrls: ['./cattle-update.page.scss'],
})
export class CattleUpdatePage implements OnInit {

  cattles: any;
constructor(private crudService: CrudService, private alertController: AlertController) { }
  ngOnInit() {
  this.crudService.read_Cattle().subscribe(data => {
      this.cattles = data.map(e => {
        return {
          id: e.payload.doc.id,
          isEdit: false,
          // tslint:disable-next-line: no-string-literal
          Tag: e.payload.doc.data()['Tag'],
          // tslint:disable-next-line: no-string-literal
          Age: e.payload.doc.data()['Age'],
          // tslint:disable-next-line: no-string-literal
          Type: e.payload.doc.data()['Type'],
          // tslint:disable-next-line: no-string-literal
          Breed: e.payload.doc.data()['Breed'],
          // tslint:disable-next-line: no-string-literal
          RegDate: e.payload.doc.data()['RegDate'],
          // tslint:disable-next-line: no-string-literal
          CalvingNo: e.payload.doc.data()['CalvingNo'],
          // tslint:disable-next-line: no-string-literal
          CalvingMon: e.payload.doc.data()['CalvingMon'],
          // tslint:disable-next-line: no-string-literal
          PregStatus: e.payload.doc.data()['PregStatus'],
          // tslint:disable-next-line: no-string-literal
          MilkingStatus: e.payload.doc.data()['MilkingStatus'],
          // tslint:disable-next-line: no-string-literal
          MilkProd: e.payload.doc.data()['MilkProd'],
          // tslint:disable-next-line: no-string-literal
          FatMilk: e.payload.doc.data()['FatMilk']
        };
      });
      console.log(this.cattles);
    });
  }
  RemoveRecord(rowID) {
    this.alertController.create({
      header: 'Are you sure?',
      message: 'Do you really want to delete?',
      buttons: [{
          text: 'Cancel',
          role: 'cancel'
      },
      {text: 'Delete',
      handler: () => {
    this.crudService.delete_Cattle(rowID);
      }
    }
  ]
}).then(alertEl => {
  alertEl.present();
});
}
  EditRecord(record) {
    record.isEdit = true;
    record.EditTag = record.Tag;
    record.EditAge = record.Age;
    record.EditType = record.Type;
    record.EditBreed = record.Breed;
    record.EditRegDate = record.RegDate;
    record.EditCalvingNo = record.CalvingNo;
    record.EditCalvingMon = record.CalvingMon;
    record.EditPregStatus = record.PregStatus;
    record.EditMilkingStatus = record.MilkingStatus;
    record.EditMilkProd = record.MilkProd;
    record.EditFatMilk = record.FatMilk;
  }
  UpdateRecord(recordRow) {
    const record = {};
    // tslint:disable-next-line: no-string-literal
    record['Tag'] = recordRow.EditTag;
    // tslint:disable-next-line: no-string-literal
    record['Age'] = recordRow.EditAge;
    // tslint:disable-next-line: no-string-literal
    record['Type'] = recordRow.EditType;
    // tslint:disable-next-line: no-string-literal
    record['Breed'] = recordRow.EditBreed;
     // tslint:disable-next-line: no-string-literal
    record['RegDate'] = recordRow.EditRegDate;
      // tslint:disable-next-line: no-string-literal
    record['CalvingNo'] = recordRow.EditCalvingNo;
     // tslint:disable-next-line: no-string-literal
    record['CalvingMon'] = recordRow.EditCalvingMon;
      // tslint:disable-next-line: no-string-literal
    record['PregStatus'] = recordRow.EditPregStatus;
     // tslint:disable-next-line: no-string-literal
    record['MilkingStatus'] = recordRow.EditMilkingStatus;
      // tslint:disable-next-line: no-string-literal
    record['MilkProd'] = recordRow.EditMilkProd;
    // tslint:disable-next-line: no-string-literal
    record['FatMilk'] = recordRow.EditFatMilk;
    this.crudService.update_Cattle(recordRow.id, record);
    recordRow.isEdit = false;
  }

}
