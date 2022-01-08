import { Component, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent  {
  @Output() emitQuote= new EventEmitter()

  authorName:any
  addQuote:string[]=[]
   Submit(){
     this.authorName
   }
  
}
 


