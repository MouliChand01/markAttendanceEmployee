
import { Component, OnInit } from '@angular/core';
import { AutendanceTrakerService } from '../autendance-traker.service';

@Component({
  selector: 'app-mark-autendance',
  templateUrl: './mark-autendance.component.html',
  styleUrls: ['./mark-autendance.component.css']
})
export class MarkAutendanceComponent implements OnInit {
  selectedDate = "undifined Date"
  selectedBatch: any;
  allUsers: any
  action: any
  selectedId: any;
  attdanceData:any;

  constructor(private ser: AutendanceTrakerService) { }
  ngOnInit(): void { }

  onselected(event: any) {
    this.selectedBatch = event.target.value;
    this.loadContant();
  }

  loadContant() {
    if (this.selectedBatch === "OLIC_600") {
      this.ser.getOlic600().subscribe((data: any) =>this.allUsers = data);
    }
    if (this.selectedBatch === "OLIC_800") {
      this.ser.getOlic800().subscribe((data: any) => this.allUsers = data);
    }
    if (this.selectedBatch === "OLIC_900") {
      this.ser.getOlic900().subscribe((data: any) => this.allUsers = data);
    }
  }

  onRadioChange(event: any, id: any) {
    this.allUsers = this.allUsers.map((e: any) => {
      if (e.empID === id) {
        e[this.selectedDate] = event.target.value;
        return e;
      }
      else 
        return e;
      });
    }

  onDataChange(){
    this.allUsers =this.allUsers.map((e:any)=>{
      e[this.selectedDate]="Present";
      return e;
    });
    // console.log(this.allUsers); this will help full for all present at starting
  }

  seletedID(e:number){
    this.selectedId = e
  }

  delatedRow(){
    if (this.selectedBatch === "OLIC_600") {
      alert("are you want delete this record");
      this.ser.delOlic600(this.selectedId).subscribe();
     }
    if (this.selectedBatch === "OLIC_800") {
      alert("are you want delete this record");
      this.ser.delOlic800(this.selectedId).subscribe();
    }
    if (this.selectedBatch === "OLIC_900") {
      alert("are you want delete this record");
      this.ser.delOlic900(this.selectedId).subscribe();
    }
  }

  updateAuttendence(){
    console.log(this.allUsers);
  }
}
