import {Component, Input, Output, EventEmitter} from '@angular/core';
import {Mood} from './mood';

@Component({
    selector: 'mw-mood-item',
    templateUrl: 'app/ts/mood-item.component.html',
    styleUrls: ['app/ts/mood-item.component.css']
})

export class MoodItemComponent{

    //'moodItemToWatch', can map to other name if needs be
    @Input() moodItem;
    @Output() delete = new EventEmitter();

    exampleProperty = 'example mood property'
    exampleTextContent = 'example text content'

    exampleMethod () {
        return 'example function complete'
    }

    onDelete(){
        this.delete.emit(this.moodItem)
        console.log('deleted')
    }

    firstMoodItem = [{
        generalMood: 50,
        apettite: 50,
        pleasureCapacity:50,
        energyLevel:50,
        motivation:50,
        selfWorth:50,
        concentration:50,

        additionalNotes:0
    },{
        generalMood: 50,
        apettite: 50,
        pleasureCapacity:50,
        energyLevel:50,
        motivation:50,
        selfWorth:50,
        concentration:50,

        additionalNotes:0
    }]
}