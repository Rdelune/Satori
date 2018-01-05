export class Mood {
    date: Date;
    generalMood: number;
    apettite: number;
    sleep: [{                       //will need to change to sleep object
     //   sleepQuality:number;
     //   sleepDifficulty:number;
     //   sleepDreams:number;
     //   sleepParalysis:number;
     //   sleepNotes: number;
    }];
    pleasureCapacity:number;
    energyLevel:number;
    motivation:number;
    selfWorth:number;
    concentration:number;
    extStressors: [{
       // dietaryNotes:string,
       // stressEvents:string,
       // percievedMoodInfluence:string
    }];
    additionalNotes:string;

    constructor(date: Date, generalMood: number,apettite: number, sleep: [{}],
           // sleepQuality:number;
           // sleepDifficulty:number;
           // sleepDreams:number;
          //  sleepParalysis:number;
          //  sleepNotes: number;
       // }],
        pleasureCapacity:number,
        energyLevel:number,
        motivation:number,
        selfWorth:number,
        concentration:number,
        extStressors: [{
         //   dietaryNotes:string,
         //   stressEvents:string,
          //  percievedMoodInfluence:string
        }],
        additionalNotes:string){
            this.date = date;
            this.generalMood = generalMood;
            this.apettite = apettite;
            this.sleep = sleep;
            //[{
                //this.sleepQuality = sleepQuality;
                //this.sleepDifficulty:number;
//sleepDreams:number;
               //// sleepParalysis:number;
               // sleepNotes: number;
           // }];
            this.pleasureCapacity = pleasureCapacity;
            this.energyLevel = energyLevel;
            this.motivation = motivation;
            this.selfWorth = selfWorth;
            this.concentration = concentration;
            this.extStressors = [{
               // dietaryNotes:string,
               // stressEvents:string,
               // percievedMoodInfluence:string
            }];
            this.additionalNotes = additionalNotes;
    }
}