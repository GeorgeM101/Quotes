import { Component } from '@angular/core';
import { Quote } from './quote';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  quotes:Quote [] = [
    
    new Quote(1, 'Deflar', 'Its never to late to start working on a dream',new Date(2021,3,14)),
    new Quote(2,'Leroy','Keep your real ones close',new Date(2022,6,9)),
   
  ];
  

  deleteQuote(isComplete:any, index:any){
    if (isComplete) {
      let toDelete = confirm(`Are you sure you want to delete ${this.quotes[index].name}?`)

      if (toDelete){
        this.quotes.splice(index,1)
      }
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
  completeQuote(isComplete:any, index:any){
    if (isComplete) {
      this.quotes.splice(index,1);
    }
  }

}
