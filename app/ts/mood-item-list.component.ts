import {Component, Input, Output, EventEmitter} from '@angular/core';
import {Mood} from './mood';
import {AppModule } from './app.module';
import {Config} from './config.service';
import {MoodItemComponent} from './mood-item.component'
import {MoodItemService} from './mood-item.service';
import {ActivatedRoute} from '@angular/router';

@Component({
    selector: 'mw-mood-item-list',
    templateUrl: 'app/ts/mood-item-list.component.html',
    styleUrls: ['app/ts/app.component.css'],
     //this is where info is going to come in from
})

export class MoodItemListComponent {
    
    @Input() playlistItem
    timeOfDay = ''
    moodItems = []
    paramsSubscription;

    constructor(
        private moodItemService: MoodItemService,
        private activatedRoute: ActivatedRoute ){}
    

    ngOnInit() {
        this.paramsSubscription = this.activatedRoute.params.subscribe(params =>)//this.moodItems = this.moodItemService.get(this.timeOfDay)
        this.activatedRoute.params.subscribe(params => {
            let medium = params['medium']

            if (medium.toLowerCase) === 'all'
            {
              medium =''  
            }

            this.getMediaItems(medium)
        })
    }

    ngOnDestroy(){
        this.paramsSubscription.unsubscribe()
    }
   
    @Output() delete = new EventEmitter();  //learn about aliases
    //exposes event that can be subscribed to on our custom eleemtn
    // t

    onSelect(mood:Mood){
        console.log(JSON.stringify(mood))
    }

    onMoodItemDelete(moodItem){
        console.log('deleted entry')
        //this.delete.emit(this.playlistItem);
        this.moodItemService.delete(moodItem);
        //created this above - using its method now
    }

    getMediaItems(timeOfDay){
        this.timeOfDay = timeOfDay;
        this.moodItemService.get(timeOfDay)
        .subscribe(moodItems => {
            this.moodItems = moodItems;
        })
    
    }

}