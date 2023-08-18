import { Component } from '@angular/core';

@Component({
  selector: 'app-vertical-left-bar',
  templateUrl: './vertical-left-bar.component.html',
  styles: [],
})
export class VerticalLeftBarComponent {
  colsPerRow: number = 3;
  onColumnChange(columns: number): void {
    this.colsPerRow = columns;
  }
}
