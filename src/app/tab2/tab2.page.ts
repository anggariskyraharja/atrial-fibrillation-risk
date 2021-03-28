import { ɵDomAdapter } from '@angular/common';
import { Component } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {
  score: number = 0;
  classification1: string = 'low';
  classification2: number = 1.9;
  classification3: string = null;
  q1: string = 'q12';
  q2: string = 'q12';
  q3: string = 'q12';
  q4: string = 'q12';
  q5: string = 'q12';
  q6: string = 'q12';
  q7: string = 'q12';

  scoring(){
    if (this.q1 == 'q11'){
      this.score = this.score + 1;
    }
    if (this.q2 == 'q11'){
      this.score = this.score + 1;
    }
    if (this.q3 == 'q11'){
      this.score = this.score + 1;
    }
    if (this.q4 == 'q11'){
      this.score = this.score + 1;
    }
    if (this.q5 == 'q11'){
      this.score = this.score + 2;
      this.classification3 = 'Note: While history of stroke or TIA provides 2 points, most physicians would classify these patients directly into high risk group.'
    } else {
      this.classification3 = null;
    }
    if (this.score == 0){
      this.classification1 = 'low';
      this.classification2 = 1.9;
    } else if (this.score == 1){
      this.classification1 = 'intermediate';
      this.classification2 = 2.8;
    } else if (this.score == 2){
      this.classification1 = 'intermediate';
      this.classification2 = 4.0;
    } else if (this.score == 3){
      this.classification1 = 'high';
      this.classification2 = 5.9;
    } else if (this.score == 4){
      this.classification1 = 'high';
      this.classification2 = 8.5;
    } else if (this.score == 5){
      this.classification1 = 'high';
      this.classification2 = 12.5;
    } else if (this.score == 6){
      this.classification1 = 'high';
      this.classification2 = 18.2;
    }
  }
  checkq1(event) {
    this.q1 = event.target.value;
    this.score = 0;
    this.scoring();
  }
  checkq2(event) {
    this.q2 = event.target.value;
    this.score = 0;
    this.scoring();
  }
  checkq3(event) {
    this.q3 = event.target.value;
    this.score = 0;
    this.scoring();
  }
  checkq4(event) {
    this.q4 = event.target.value;
    this.score = 0;
    this.scoring();
  }
  checkq5(event) {
    this.q5 = event.target.value;
    this.score = 0;
    this.scoring();
  }
  checkq6(event) {
    this.q6 = event.target.value;
    this.score = 0;
    this.scoring();
  }
  checkq7(event) {
    this.q7 = event.target.value;
    this.score = 0;
    this.scoring();
  }

  constructor(public alertController: AlertController) {
  }

}
