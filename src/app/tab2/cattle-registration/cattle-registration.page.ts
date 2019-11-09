import { Component, OnInit } from '@angular/core';
import { CrudService } from 'src/app/service/crud.service';
import {Cattle} from '../../cattle.model';
@Component({
  selector: 'app-cattle-registration',
  templateUrl: './cattle-registration.page.html',
  styleUrls: ['./cattle-registration.page.scss'],
})
export class CattleRegistrationPage implements OnInit {
  cattle: Cattle[];
  cattles: any;
  cattleTag: any;
  cattleAge: number;
  cattleType: string;
  cattleBreed: string;
  cattleRegDate: Date;
  cattleCalvingNo: number;
  cattleCalvingMon: string;
  cattlePregStatus: string;
  cattleMilkingStatus: string;
  cattleMilkProd: number;
  cattleFatMilk: number;
constructor(private crudService: CrudService) { }
  ngOnInit() {
  }
  CreateRecord() {
    const record = {};
    // tslint:disable-next-line: no-string-literal
    record['Tag'] = this.cattleTag;
    // tslint:disable-next-line: no-string-literal
    record['Age'] = this.cattleAge;
    // tslint:disable-next-line: no-string-literal
    record['Type'] = this.cattleType;
    // tslint:disable-next-line: no-string-literal
    record['RegDate'] = this.cattleRegDate;
    // tslint:disable-next-line: no-string-literal
    record['Breed'] = this.cattleBreed;

    // tslint:disable-next-line: no-conditional-assignment
    if (this.cattleCalvingNo === undefined) {
          // tslint:disable-next-line: no-string-literal
      record['CalvingNo'] = 0;
    } else {
      // tslint:disable-next-line: no-string-literal
      record['CalvingNo'] = this.cattleCalvingNo;
    }

    // tslint:disable-next-line: no-conditional-assignment
    if (this.cattleCalvingMon === undefined) {
      // tslint:disable-next-line: no-string-literal
      record['CalvingMon'] = 'NA';
    } else {
  // tslint:disable-next-line: no-string-literal
    record['CalvingMon'] = this.cattleCalvingMon;
  }

   // tslint:disable-next-line: no-conditional-assignment
    if (this.cattlePregStatus === undefined) {
    // tslint:disable-next-line: no-string-literal
    record['PregStatus'] = 'NA';
  } else {
 // tslint:disable-next-line: no-string-literal
 record['PregStatus'] = this.cattlePregStatus;
}

// tslint:disable-next-line: no-conditional-assignment
    if (this.cattleMilkingStatus === undefined) {
  // tslint:disable-next-line: no-string-literal
  record['MilkingStatus'] = 'NA';
} else {
// tslint:disable-next-line: no-string-literal
record['MilkingStatus'] = this.cattleMilkingStatus;
}

// tslint:disable-next-line: no-conditional-assignment
    if (this.cattleMilkProd === undefined) {
  // tslint:disable-next-line: no-string-literal
  record['MilkProd'] = 0;
} else {
// tslint:disable-next-line: no-string-literal
record['MilkProd'] = this.cattleMilkProd;
}

// tslint:disable-next-line: no-conditional-assignment
    if (this.cattleFatMilk === undefined) {
  // tslint:disable-next-line: no-string-literal
  record['FatMilk'] = 0;
} else {
 // tslint:disable-next-line: no-string-literal
 record['FatMilk'] = this.cattleFatMilk;
}
    this.crudService.create_NewCattle(record).then(resp => {
      this.cattleTag = '';
      this.cattleAge = undefined;
      this.cattleType = '';
      this.cattleBreed = '';
      this.cattleRegDate = undefined;
      this.cattleCalvingNo = 0;
      this.cattleCalvingMon = '';
      this.cattlePregStatus = '';
      this.cattleMilkingStatus = '';
      this.cattleMilkProd = undefined;
      this.cattleFatMilk = undefined;
      console.log(resp);
    })
      .catch(error => {
        console.log(error);
      });
  }
}
