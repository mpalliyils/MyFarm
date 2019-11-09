import { Component, OnInit } from '@angular/core';
import { CrudService } from 'src/app/service/crud.service';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-cattle-list',
  templateUrl: './cattle-list.page.html',
  styleUrls: ['./cattle-list.page.scss'],
})
export class CattleListPage implements OnInit {
  cattles: any;
constructor(private crudService: CrudService, private datePipe: DatePipe) { }
  ngOnInit() {
    this.crudService.read_Cattle().subscribe(data => {
      this.cattles = data.map(e => {
        return {
          id: e.payload.doc.id,
          isView: false,
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
  ItemizedView(record) {
    record.isView = true;
    record.RegsDate = this.datePipe.transform(record.RegDate, 'MM/dd/yyyy');
  }
}
