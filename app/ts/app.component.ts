import {Component} from 'angular2/core';
import {Config} from './config.service';
import {Mood} from './mood';
import {PlaylistComponent} from './playlist.component';
import {inputForm} from './inputForm.component';


@Component({
    selector: 'my-app',
    templateUrl: 'app/ts/app.component.html',
    directives: [PlaylistComponent,inputForm]
})

export class AppComponent {

    clickedButton(){
        console.log('clicked');
        
    }

    moods: Array <Mood>;
        constructor(){
            this.moods = [
                new Mood(
                    new Date(),
                    50,
                    50, 
                    [{}
                   //     sleepQuality:50;
                    //    sleepDifficulty:50;
                    ////    sleepDreams:50;
                    //    sleepParalysis:50;
                   //     sleepNotes: 'good sleep, no issues';
                    ],
                    100,
                    100,
                    100,
                    100,
                    100,
                    [{
                     //   dietaryNotes: 'Taking pharmaton',
                      //  stressEvents: '20 mins weights in morning + 5k run',
                      //  percievedMoodInfluence:100;
                    }],
                    'Feeling good')
            ]
        }
}
