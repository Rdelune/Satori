import {Component} from '@angular/core';
import {AppModule } from './app.module';

import {Config} from './config.service';
import {Mood} from './mood';
import {MoodItemListComponent} from './mood-item-list.component';
import { FormGroup } from '@angular/forms/src/model';

@Component({
    selector: 'my-app',
    templateUrl: 'app/ts/app.component.html',
    styleUrls: ['app/ts/app.component.css']
})

export class AppComponent {

    public myForm: FormGroup;
    public submitted: boolean;
    public events: any[] = []

    onMoodItemDelete(moodItem){
    };

    clickedButton(){
        console.log('clicked');  
    }

    firstMooditem = {
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


    moodItems = [{
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
    },{
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
    },
    {
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
    }]







    moods: Array <Mood>;
        constructor(){
             [
                this.firstPlaylistItem
            ]
        }
}