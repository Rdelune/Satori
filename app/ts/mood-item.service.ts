import { Http, HttpModule} from '@angular/http'
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';

@Injectable()
export class MoodItemService  {
    
    constructor(private http: Http){
    }

    get (medium){
        //let searchParams = new URLSearchParams()
       // searchParams.append('medium', medium)
        //return this.http.get('mediaitems')
        return  //GOES TO SUBSCRIBE FUNCTION
       // .map(response => {return response.json().mediaitems})
    }

    add(moodItem){
        this.moodItemsServiceFile.push(moodItem)
        //return this.http.post('mediaItems', moodItem)
        //.map(response => {}) //handle repsonse data
    }

    delete(moodItem){
        let index = this.moodItemsServiceFile.indexOf(moodItem)
        if (index >= 0){
            this.moodItemsServiceFile.splice(index, 1)
        }

      //  return this.http.delete(`mediaitems/${moodItem.id}`)
       //     .map(response => {});
    }

    moodItemsServiceFile = [{
        date: 40,
        generalMood: 40,
        appetite: 70,
        //sleep: new FormControl('50'),
        timeOfDay: 'Afternoon',
        sleepQuality: 80,
        sleepDifficulty: 80,
        sleepDreamIntensity: 20,
        sleepParalysis: 20,
        sleepNotes: 'Well rested',
        pleasureCapacity: 70,
        energyLevel: 60,
        motivation: 60,
        selfWorth: 40,
        concentration: 60,
        //extStressors: new FormControl(),
        dietaryNotes: 'nicotine',
        stressEvents: 'Nothing worth mentioning',
        percievedMoodInfluence: '65',
        additionalNotes: 'None'
    },{
        date: 40,
        generalMood: 40,
        appetite: 70,
        //sleep: new FormControl('50'),
        timeOfDay: 'Afternoon',
        sleepQuality: 80,
        sleepDifficulty: 80,
        sleepDreamIntensity: 20,
        sleepParalysis: 20,
        sleepNotes: 'Well rested',
        pleasureCapacity: 70,
        energyLevel: 60,
        motivation: 60,
        selfWorth: 50,
        concentration: 40,
        //extStressors: new FormControl(),
        dietaryNotes: 'nicotine',
        stressEvents: 'Very minor misunderstanding',
        percievedMoodInfluence: '65',
        additionalNotes: 'None'
    }]
}