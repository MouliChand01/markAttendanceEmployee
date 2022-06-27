import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { event } from 'jquery';
import { AutendanceTrakerService } from '../autendance-traker.service';

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.css']
})
export class AddEmployeeComponent implements OnInit {

  Newobj={empID:"",firstName:"",lastName:"",email:"" };
  selectedBatch:any;

  constructor(private ser:AutendanceTrakerService,private router:Router) { }

  ngOnInit(): void {
  }

  onselected(event:any){
    this.selectedBatch = event.target.value
  }

  addEmployee(){
    if(this.selectedBatch === "OLIC_600"){
      this.ser.olic600(this.Newobj).subscribe();
      this.router.navigate(['empList']);
    }
    if(this.selectedBatch === "OLIC_800"){
      this.ser.olic800(this.Newobj).subscribe();
      this.router.navigate(['empList']);
    }
    if(this.selectedBatch === "OLIC_900"){
      this.ser.olic900(this.Newobj).subscribe();
      this.router.navigate(['empList']);
    }
  }

}
