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


}
