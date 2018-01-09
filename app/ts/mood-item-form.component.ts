import { Component, Inject} from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Mood } from './mood';
import { MoodItemService } from './mood-item.service'
import { lookupListToken } from './providers'
import { Router } from '@angular/router'

@Component({
  selector: 'mw-mood-item-form',
  templateUrl: 'app/ts/mood-item-form.component.html',
  styleUrls: ['app/ts/mood-item-form.component.css']
})
export class MoodItemFormComponent {
  form;
   
  constructor(
    private formBuilder: FormBuilder, 
    private moodItemService: MoodItemService,
    
    @Inject(lookupListToken) public lookupLists,
    private router: Router
  
  ){}

    ngOnInit() {
      this.form = this.formBuilder.group({
        date: this.formBuilder.control(new Date()),
        generalMood: this.formBuilder.control('50'),
        appetite: this.formBuilder.control('50', Validators.compose([
          Validators.required,
          Validators.pattern('[\\w\\-\\s\\/]+')
        ])),
        //sleep: new FormControl('50'),
        timeOfDay: this.formBuilder.control('50'),
        sleepQuality: this.formBuilder.control('50'),
        sleepDifficulty: this.formBuilder.control('50'),
        sleepDreamIntensity: this.formBuilder.control('50'),
        sleepParalysis: this.formBuilder.control('50'),
        sleepNotes: this.formBuilder.control('A fine sleep'),
        pleasureCapacity: this.formBuilder.control('50'),
        energyLevel: this.formBuilder.control('50'),
        motivation: this.formBuilder.control('50'),
        selfWorth: this.formBuilder.control('50'),
        concentration: this.formBuilder.control('50', this.motivationValidator),
        //extStressors: new FormControl(),
        dietaryNotes: this.formBuilder.control('Coffee and nicotine'),
        stressEvents: this.formBuilder.control('Nothing worth mentioning'),
        percievedMoodInfluence: this.formBuilder.control('50'),
        additionalNotes: this.formBuilder.control('50')
    })
   }

   motivationValidator(control){
      if (control.value.trim().length === 0){
        return null
      }

      let inputValue = parseInt(control.value)
      let minValue = 1;
      let maxValue = 100;

      if (inputValue >= minValue && inputValue <= maxValue){
        return null
      }else{
        return { 
          'inputValue': {
          min: minValue,
          max: maxValue
        }
      }
   }
  }

  onSubmit(mediaItem){  

    event.preventDefault()
    console.log(mediaItem)
    var convertedMoodItem = JSON.stringify(mediaItem)
   
    this.moodItemService.add(mediaItem)
      .subscribe(() => {
        this.router.navigate(['/', mediaItem.medium])
          //route to the appropriate list on submission
            })
  }
}
