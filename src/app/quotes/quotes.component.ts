import { Component, OnInit } from '@angular/core';
import { Quote } from '../quote'

@Component({
  selector: 'app-quotes',
  templateUrl: './quotes.component.html',
  styleUrls: ['./quotes.component.css']
})
export class QuotesComponent {
  quotes:Quote [] = [
    
    new Quote(1, 'Life', 'Kindness goes a long way',new Date(2022,1,3)),
    new Quote(2,'Wealth','Cut off things that drain you shift your focus to what builds you',new Date(2022,1,8)),

  ];
  

  deleteQuote(isComplete:any, index:any){
    if (isComplete) {
      let toDelete = confirm(`This ${this.quotes[index].name}? will be deleted`)

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
  
  toggleDetails(index:any){
    this.quotes[index].showDescription = !this.quotes[index].showDescription;
  }
  addNewQuote(quote:any){
    let quoteLength = this.quotes.length;
    quote.id = quoteLength+1;
    quote.completeDate = new Date(quote.completeDate)
    this.quotes.push(quote)
  }


  
  }


