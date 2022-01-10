import {  Input, Output, EventEmitter} from '@angular/core';
import { Component, } from '@angular/core';
import { Quote } from '../quote'

@Component({
  selector: 'app-quote-details',
  templateUrl: './quote-details.component.html',
  styleUrls: ['./quote-details.component.css']
})
export class QuoteDetailsComponent {
  @Input()
  quote!: Quote;
  @Output() isComplete = new EventEmitter<boolean>();

  quoteComplete(complete:boolean){
    this.isComplete.emit(complete);
  }
  upVotes:number=0;
  upVote(){
    this.upVotes=this.upVotes+1;
  }

  downVotes:number=0;
  downVote(){
    this.downVotes=this.downVotes+1;
  }
    
}

 
  


