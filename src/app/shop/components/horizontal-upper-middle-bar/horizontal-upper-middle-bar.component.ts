import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-horizontal-upper-middle-bar',
  templateUrl: './horizontal-upper-middle-bar.component.html',
  styles: [],
})
export class HorizontalUpperMiddleBarComponent {
  // * to send data from child component to parent component:
  @Output()
  columnCount = new EventEmitter<number>();

  sort: string = 'Desc';
  itemCount: number = 12;

  onClickSortBy(type: string): void {
    this.sort = type;
  }

  onClickShowItems(count: number): void {
    this.itemCount = count;
  }

  onListView(columns: number): void {
    this.columnCount.emit(columns);
  }
}
