import { Injectable } from '@angular/core';
import { Http, URLSearchParams } from '@angular/http';
import 'rxjs/add/operator/map';


//get and set data from the data store
//in this case, display items
//can wrap up a formula here and use it wherever
//specific things that are none component specific



@Injectable()
export class MoodItemService {
  constructor(private http: Http) {}

  get(medium) {
    let searchParams = new URLSearchParams();
    searchParams.append('medium', medium);
    return this.http.get('moodItems', { search: searchParams })
      .map(response => {
        return response.json().moodItems;
      });
  }
  
  add(moodItem) {
    return this.http.post('moodItems', moodItem)
      .map(response => {});
  }
  
  delete(moodItem) {
    return this.http.delete(`moodItems/${moodItem.id}`)
      .map(response => {});
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
