import { Component, ElementRef, ViewChild } from '@angular/core';
import { GifsService } from '../../services/gifs.service';

@Component({
  selector: 'gifs-search-box',
  templateUrl: './search-box.component.html',
  styleUrl: './search-box.component.css',
})
export class SearchBoxComponent {
  constructor(private gifsService: GifsService) {}
  @ViewChild('searchBox')
  public tagInput!: ElementRef<HTMLInputElement>;
  searchTag() {
    if(this.tagInput.nativeElement.value != ''){
      this.gifsService.searchTag(this.tagInput.nativeElement.value)
      this.tagInput.nativeElement.value = '';
    }
  }
}
