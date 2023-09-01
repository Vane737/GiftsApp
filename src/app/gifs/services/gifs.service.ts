import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Gif, SearchResponse } from '../interfaces/gifs.interface';
// const GIPHY_API_KEY = 'H7k1pmB5vmwKCg8JHR6C1w2avkDUTdam';

@Injectable({providedIn: 'root'})
export class GifsService {

  public gifList: Gif[] = [];
  private _tagsHistory: string[] = [];
  private apiKey:       string = 'H7k1pmB5vmwKCg8JHR6C1w2avkDUTdam';
  private serviceUrl:   string = 'https://api.giphy.com/v1/gifs';


  constructor( private http: HttpClient ) {
    this.loadLocalStorage();
    console.log('This service Ready');

  }

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
    this.saveLocalStorage();
  }

  searchTag( tag: string ):void {
    if (tag.length === 0) return;
    this.organizeHistory(tag);
    // console.log(this._tagsHistory);
    const params = new HttpParams()
      .set( 'api_key', this.apiKey )
      .set('limit', '10')
      .set('q', tag)

    this.http.get<SearchResponse>(`${this.serviceUrl}/search`, { params })
    .subscribe( resp => {

      this.gifList = resp.data;
      // console.log('Gifs:' ,resp.data);

    })
  }

  private saveLocalStorage(): void {
     localStorage.setItem('history', JSON.stringify(this._tagsHistory))
  }

  private loadLocalStorage():void {
    if (!localStorage.getItem('history')) return;
    this._tagsHistory = JSON.parse( localStorage.getItem('history')! )
    if (this._tagsHistory.length === 0) return;
    this.searchTag(this._tagsHistory[0]);
  }

}
