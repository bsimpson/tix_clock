import { Component } from '@angular/core';
import { OnChanges } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnChanges {
  private hours: object;
  private minutes: object;
  private seconds: object;
  public time: any;
  public hoursFirst: object;
  public hoursSecond: object;
  public minutesFirst: object;
  public minutesSecond: object;
  public secondsFirst: object;
  public secondsSecond: object;

  constructor() {
    this.calculateGrid();
  }

  calculateGrid() {
    this.time = new Date();
    this.hours = this.splitTimeParts(this.twelveHour(this.time.getHours()));
    this.minutes = this.splitTimeParts(this.time.getMinutes());
    this.seconds = this.splitTimeParts(this.time.getSeconds());

    this.hoursFirst = this.fillArray(this.hoursFirst, this.hours[0], 3);
    this.hoursSecond = this.fillArray(this.hoursSecond, this.hours[1], 9);
    this.minutesFirst = this.fillArray(this.minutesFirst, this.minutes[0], 6);
    this.minutesSecond = this.fillArray(this.minutesSecond, this.minutes[1], 9);
    this.secondsFirst = this.fillArray(this.secondsFirst, this.seconds[0], 6);
    this.secondsSecond = this.fillArray(this.secondsSecond, this.seconds[1], 9);
  }

  splitTimeParts(time) {
    // Take the time and split into first and second digit
    const parts = time.toString().split('');
    // Lpad with 0 is single digit
    if (parts.length < 2) {
      parts.unshift('0');
    }
    const [first, last] = [...parts];
    return [parseInt(first, 10), parseInt(last, 10)];
  }

  twelveHour(hour) {
    if (hour === 0 || hour === 12) {
      return 12;
    }
    return hour % 12;
  }

  fillArray(array, numberToFill: number, total: number) {
    if (typeof array === 'undefined') {
      array = new Array(total);
      array.fill(false);
    }

    if (numberToFill === 0) {
      array = new Array(total);
      array.fill(false);
    }

    while (array.filter(function(item) {return item === true; }).length !== numberToFill) {
      array[this.random(total)] = true;
    }
    return array;
  }

  random(max) {
    max = Math.floor(max);
    return Math.floor(Math.random() * (max));
  }

  ngOnChanges(changes) {
    this.calculateGrid();
  }
}
