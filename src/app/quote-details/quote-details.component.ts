import {  Input, Output, EventEmitter} from '@angular/core';
import { Component, } from '@angular/core';
import { Quote } from '@angular/compiler'

@Component({
  selector: 'app-quote-details',
  templateUrl: './quote-details.component.html',
  styleUrls: ['./quote-details.component.css']
})
export class QuoteDetailsComponent {

    @Input() quotes: Quote[] = [];
    @Output() isComplete = new EventEmitter<boolean>();
  
    quoteComplete(complete:boolean){
      this.isComplete.emit(complete);
    }
    upVotes:number=0;
    upVote(){
      this.upVotes=this.upVotes++;
    }
  
    downVotes:number=0;
    downVote(){
      this.downVotes=this.downVotes++;
    }
    
    
  
  
}

 
  


