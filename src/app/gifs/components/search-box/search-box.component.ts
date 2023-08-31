import { Component, ElementRef, ViewChild } from '@angular/core';
import { GifsService } from '../../services/gifs.service';

@Component({
  selector: 'gifs-search-box',
  template: `
    <!-- <h5 class="">Buscar:</h5>
    <input type="text"
      class="form-control"
      placeholder="Buscar gifs..."
      (keyup.enter)="searchTag( txtTagInput.value )"
      #txtTagInput
    > -->
    <h5 class="">Buscar:</h5>
    <input type="text"
      class="form-control"
      placeholder="Buscar gifs..."
      (keyup.enter)="searchTag()"
      #txtTagInput
    >
  `,
  styleUrls: ['./search-box.component.css']
})
export class SearchBoxComponent {

  @ViewChild('txtTagInput')
  public tagInput!: ElementRef<HTMLInputElement>;

  constructor( private gifService: GifsService) {

  }

  searchTag(): void {
    const newTag = this.tagInput.nativeElement.value;
    // console.log(newTag);
    this.gifService.searchTag(newTag);
    this.tagInput.nativeElement.value = "";
    // console.log(this.gifService.tagsHistory);

  }

}
