import {Component} from 'angular2/core';
import {Mood} from './mood';
import {Config} from './config.service';

@Component({
    selector: 'inputForm',
    templateUrl: 'app/ts/inputForm.component.html',
    
})

export class inputForm {
    
    //onSelect(mood:Mood){
    //    console.log(JSON.stringify(mood))
    //}

    submitEntry(){
        console.log('submitting entry')

    }

    switchView(){
        console.log('clicked')

    }

}
