import { Component } from '@angular/core';
import { ChallengeService } from './challenge.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'endless';
  steps : any[];
  apiresult:any[];

  constructor(private _service:ChallengeService){
    this.getChallengeResult();
  }
  getChallengeResult(){
    this._service.getChallengeAPI().subscribe((result:any[])=>{
      this.apiresult = result;
      this.steps = this.sortAPIData();
    });
  }
  sortAPIData(){
    return this.apiresult.sort((a,b)=> { 
      var colName = "stepNumber";
      return ((a[colName]  == b[colName]) ? 0 : ((a[colName] > b[colName]) ? 1 : -1 ));
  });
 }
}
