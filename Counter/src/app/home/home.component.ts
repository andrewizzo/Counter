import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  contatore : number = 1
  opertatore : string = '-'
  statoOperatore : string = 'positivo';
  displayContatore : number = 0
  isDisabledPlus : boolean = false
  isDisabledMin : boolean = false
  
  constructor(){}
  
  ngOnInit(): void {
    this.setOpertatore()
  }

  add(){
    this.displayContatore = this.displayContatore + this.contatore;
  }

  subtraction(){
    this.displayContatore = this.displayContatore - this.contatore;
  }

  addValue(value:number){
    this.contatore = value;
  }

  setOpertatore(){
    if (this.opertatore === '+') {
      this.opertatore = '-'
      this.statoOperatore = 'positivo'
      this.isDisabledMin = false;
      this.isDisabledPlus = true
    }else if(this.opertatore === '-'){
      this.opertatore = '+'
      this.statoOperatore = 'negativo'
      this.isDisabledPlus = false
      this.isDisabledMin = true
    }
    console.log(this.opertatore,this.statoOperatore);
    
  }
}
