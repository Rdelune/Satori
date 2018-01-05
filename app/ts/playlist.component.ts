import {Component} from 'angular2/core';
import {Mood} from './mood';
import {Config} from './config.service';

@Component({
    selector: 'playlist',
    templateUrl: 'app/ts/playlist.component.html',
    inputs:['moods'] //this is where info is going to come in from
})

export class PlaylistComponent {
    
    onSelect(mood:Mood){
        console.log(JSON.stringify(mood))
    }

}
