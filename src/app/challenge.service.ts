import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { conditionallyCreateMapObjectLiteral } from '@angular/compiler/src/render3/view/util';

@Injectable({
  providedIn: 'root'
})
export class ChallengeService {

  url: string = 'https://uqnzta2geb.execute-api.us-east-1.amazonaws.com/default/FrontEndCodeChallenge';

  constructor(private httpclient: HttpClient) { 
    this.getChallengeAPI();
  }

  getChallengeAPI(){
   return this.httpclient.get(this.url);
  }
}
