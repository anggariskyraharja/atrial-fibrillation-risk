import { ɵDomAdapter } from '@angular/common';
import { Component } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  score: number = 0;
  classification1: number = 0.2;
  classification2: number = 0.3;
  q1: string = 'q11';
  q2: string = 'q12';
  q3: string = 'q12';
  q4: string = 'q12';
  q5: string = 'q12';
  q6: string = 'q12';
  q7: string = 'q12';

  scoring(){
    if (this.q1 == 'q12'){
      this.score = this.score + 1;
    } else if (this.q1 == 'q13'){
      this.score = this.score + 2;
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
    }
    if (this.q6 == 'q11'){
      this.score = this.score + 1;
    }
    if (this.q7 == 'q11'){
      this.score = this.score + 1;
    }
    if (this.score == 0){
      this.classification1 = 0.2;
      this.classification2 = 0.3;
    } else if (this.score == 1){
      this.classification1 = 0.6;
      this.classification2 = 0.9;
    } else if (this.score == 2){
      this.classification1 = 2.2;
      this.classification2 = 2.9;
    } else if (this.score == 3){
      this.classification1 = 3.2;
      this.classification2 = 4.6;
    } else if (this.score == 4){
      this.classification1 = 4.8;
      this.classification2 = 6.7;
    } else if (this.score == 5){
      this.classification1 = 7.2;
      this.classification2 = 10.0;
    } else if (this.score == 6){
      this.classification1 = 9.7;
      this.classification2 = 13.6;
    } else if (this.score == 7){
      this.classification1 = 11.2;
      this.classification2 = 15.7;
    } else if (this.score == 8){
      this.classification1 = 10.8;
      this.classification2 = 15.2;
    } else if (this.score == 9){
      this.classification1 = 12.2;
      this.classification2 = 17.4;
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
