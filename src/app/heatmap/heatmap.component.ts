import { Component, OnInit } from '@angular/core';

interface DataObject {
  a: string;
  b: string;
  value: number;
}

@Component({
  selector: 'app-heatmap',
  templateUrl: './heatmap.component.html',
  styleUrls: ['./heatmap.component.css']
})
export class HeatmapComponent implements OnInit {
  public rows = 10;
  public cols = 10;
  public data;

  ngOnInit() {
    this.data = this.makeDataObjects(this.rows, this.cols);
  }

  public makeDataObjects(rows, cols): DataObject[] {
    const data: DataObject[] = [];
    for (let rowIndex = 0; rowIndex < rows; rowIndex++) {
      Array.from(Array(cols)).map((_, colIndex) => {
        data.push({
          a: `А${rowIndex + 1}`,
          b: `B${colIndex + 1}`,
          value: cols + rowIndex * colIndex,
        });
      });
    }

    return data;
  }
}