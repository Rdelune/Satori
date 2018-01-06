import {Component} from '@angular/core';
import {AppModule } from './app.module';
import {Config} from './config.service';
import {Mood} from './mood';
import {PlaylistComponent} from './playlist.component';
import {inputForm} from './inputForm.component';

@Component({
    selector: 'my-app',
    templateUrl: 'app/ts/app.component.html',
    styleUrls: ['app/ts/app.component.css']
})

export class AppComponent {

    onPlaylistItemDelete(mediaItem){
    };

    clickedButton(){
        console.log('clicked');  
    }

    firstPlaylistItem = {
        date: 10,
        generalMood: 50,
        apettite: 50,
        sleep: [{                       //will need to change to sleep object
         //   sleepQuality:number;
         //   sleepDifficulty:number;
         //   sleepDreams:number;
         //   sleepParalysis:number;
         //   sleepNotes: number;
        }],
        pleasureCapacity:50,
        energyLevel:50,
        motivation:50,
        selfWorth:50,
        concentration:50,
        extStressors: [{
           // dietaryNotes:string,
           // stressEvents:string,
           // percievedMoodInfluence:string
        }],
        additionalNotes:0
        }

    moods: Array <Mood>;
        constructor(){
             [
                this.firstPlaylistItem
            ]
        }
}