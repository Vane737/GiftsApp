import { Injectable } from '@angular/core';

// const GIPHY_API_KEY = 'H7k1pmB5vmwKCg8JHR6C1w2avkDUTdam';

@Injectable({providedIn: 'root'})
export class GifsService {

  private _tagsHistory: string[] = [];
  private apiKey: string = 'H7k1pmB5vmwKCg8JHR6C1w2avkDUTdam';
  
  constructor() { }

  get tagsHistory() {
    return [...this._tagsHistory];
  }


  private organizeHistory( tag:string ):void {
    tag = tag.toLowerCase();

    if ( this._tagsHistory.includes( tag ) ){
      this._tagsHistory = this._tagsHistory.filter( (oldTag) => oldTag !== tag );
    }
    this._tagsHistory.unshift( tag );
    this._tagsHistory = this.tagsHistory.splice(0,10);
  }

  searchTag( tag: string ):void {
    if (tag.length === 0) return;
    this.organizeHistory(tag);
    console.log(this._tagsHistory);

  }

}
