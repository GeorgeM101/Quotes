export class Quote {
  emit(addQuote: Quote) {
    throw new Error('Method not implemented.');
  }
  showDescription: boolean;
  constructor(public id: number,public name: string,public description: string, public completeDate: Date){
    this.showDescription=false;
  }
}


