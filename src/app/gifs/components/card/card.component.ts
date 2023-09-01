import { Component, Input, OnInit } from '@angular/core';
import { Gif } from '../../interfaces/gifs.interface';

@Component({
  selector: 'gifs-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit{
  @Input()
  public gift!:Gif;

  ngOnInit(): void {
    if (!this.gift) throw new Error('Gift property ir required');
  }
}
