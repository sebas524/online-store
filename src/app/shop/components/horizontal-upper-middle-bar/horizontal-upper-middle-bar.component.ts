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
  @Output()
  changeLimit = new EventEmitter<number>();
  @Output()
  changeSort = new EventEmitter<string>();

  sort: string = 'desc';
  itemCount: number = 15;

  onClickSortBy(type: string): void {
    this.sort = type;
    this.changeSort.emit(type);
  }

  onClickShowItems(count: number): void {
    this.itemCount = count;
    this.changeLimit.emit(count);
  }

  onListView(columns: number): void {
    this.columnCount.emit(columns);
  }
}
