import {Component, Input, Output, EventEmitter} from '@angular/core';
import {Mood} from './mood';
import {AppModule } from './app.module';
import {Config} from './config.service';
import {MoodItemComponent } from './mood-item.component'


@Component({
    selector: 'playlist',
    templateUrl: 'app/ts/playlist.component.html',
    inputs:['exampleMood1'],
    styleUrls: ['app/ts/app.component.css'],
     //this is where info is going to come in from
})

export class PlaylistComponent {
    @Input() playlistItem
    
    moodItem = new Mood(
        new Date(),
        50,
        50, 
        [{}],
        100,
        100,
        100,
        100,
        100,
        [{ }],
        'Feeling good')
   
    @Output() delete = new EventEmitter();  //learn about aliases
    //exposes event that can be subscribed to on our custom eleemtn
    // t

    onSelect(mood:Mood){
        console.log(JSON.stringify(mood))
    }

    onDelete(){
        console.log('deleted entry')
        this.delete.emit(this.playlistItem);
        //created this above - using its method now
    }

}
