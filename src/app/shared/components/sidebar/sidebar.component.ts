import { Component } from '@angular/core';
import { GifsService } from 'src/app/gifs/services/gifs.service';

@Component({
  selector: 'shared-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent {

  public listTags: string[] = [];
  constructor( private gifsService:GifsService ) {
  }

  get tags():string[] {
    return this.gifsService.tagsHistory;
  }

  research(tag:string):void {
    this.gifsService.searchTag(tag);
  }

}
