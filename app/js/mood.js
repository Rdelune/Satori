System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var Mood;
    return {
        setters:[],
        execute: function() {
            Mood = (function () {
                function Mood(date, generalMood, apettite, sleep, 
                    // sleepQuality:number;
                    // sleepDifficulty:number;
                    // sleepDreams:number;
                    //  sleepParalysis:number;
                    //  sleepNotes: number;
                    // }],
                    pleasureCapacity, energyLevel, motivation, selfWorth, concentration, extStressors, additionalNotes) {
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
                    this.extStressors = [{}];
                    this.additionalNotes = additionalNotes;
                }
                return Mood;
            }());
            exports_1("Mood", Mood);
        }
    }
});
//# sourceMappingURL=mood.js.map