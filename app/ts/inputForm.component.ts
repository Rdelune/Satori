import {Component} from '@angular/core';
import {Mood} from './mood';
import {Config} from './config.service';

@Component({
    selector: 'inputForm',
    templateUrl: 'app/ts/inputForm.component.html',
   // styleUrls: ''
})

export class inputForm {
    
    //onSelect(mood:Mood){
    //    console.log(JSON.stringify(mood))
    //}


//property binding:
//interpolation - {{name}}
//or: [textCOntent]='{{name}}'

    date = new Date()

    submitEntry(){
        console.log('submitting entry')

    }

    switchView(){
        console.log('clicked')

    }

}
