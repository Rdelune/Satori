import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'mw-mood-item',
  templateUrl: 'app/ts/mood-item.component.html',
  styleUrls: ['app/ts/mood-item.component.css']
})
export class MoodItemComponent {
  @Input() moodItem;
  @Output() delete = new EventEmitter();

  onDelete() {
    this.delete.emit(this.moodItem);
  }
}
