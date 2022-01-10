import { Component, OnInit } from '@angular/core';
import { Quote } from '../quote'

@Component({
  selector: 'app-quotes',
  templateUrl: './quotes.component.html',
  styleUrls: ['./quotes.component.css']
})
export class QuotesComponent {
  quotes:Quote [] = [
    
    new Quote(1, 'Life', 'Do what is right according to you and wh',new Date(2022,1,3)),
    new Quote(2,'Wealth','Cut off things that drain you',new Date(2022,1,8)),

  ];
  

  deleteQuote(isComplete:any, index:any){
    if (isComplete) {
      let toDelete = confirm(`Confirm you want to delete ${this.quotes[index].name}?`)

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
    quote.id = quoteLength++;
    quote.completeDate = new Date(quote.completeDate)
    this.quotes.push(quote)
  }


  
  }


