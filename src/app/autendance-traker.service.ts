import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AutendanceTrakerService {

  batch_600='http://localhost:3000/OILC-600';
  batch_800='http://localhost:3000/OILC-800';
  batch_900='http://localhost:3000/OILC-900';
  

 constructor(private http:HttpClient) { }
 
 getOlic600(){
  return this.http.get(this.batch_600)
 }
 getOlic800(){
  return this.http.get(this.batch_800)
 }
 getOlic900(){
  return this.http.get(this.batch_900)
 }

 olic600(data:any){
  console.log(data)
  return this.http.post(this.batch_600,data)
}
 olic800(data:any){
  console.log(data)
  return this.http.post(this.batch_800,data)
}
 olic900(data:any){
  console.log(data)
  return this.http.post(this.batch_900,data)
}

delOlic600(id:any){
  return this.http.delete(`${this.batch_600}/${id}`)
}
delOlic800(id:any){
  return this.http.delete(`${this.batch_800}/${id}`)
}
delOlic900(id:any){
  return this.http.delete(`${this.batch_900}/${id}`)
}




}


