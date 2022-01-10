import { Component, OnInit } from '@angular/core';
import { Quote } from '../quote'

@Component({
  selector: 'app-quotes',
  templateUrl: './quotes.component.html',
  styleUrls: ['./quotes.component.css']
})
export class QuotesComponent {
  quotes:Quote [] = [
    
    new Quote(1, 'Life', 'Kindness goes a long way',new Date(2022,1,4)),
    new Quote(2,'Wealth','Cut off things that drain you shift your focus to what builds you',new Date(2022,1,3)),

  ];
  

  deleteQuote(isComplete:any, index:any){
    if (isComplete) {
      let toDelete = confirm(`Confirm you want to delete quote by ${this.quotes[index].name}? `)

      if (toDelete){
        this.quotes.splice(index,1)
      }
    }
  }

  completeQuote(isComplete:any, index:any){
    if (isComplete) {
      this.quotes.splice(index,1);
    }
  }
  
 
  addNewQuote(quote:any){
    let quoteLength = this.quotes.length;
    quote.id = quoteLength+1;
    quote.completeDate = new Date(quote.completeDate)
    this.quotes.push(quote)
  }


  
  }


