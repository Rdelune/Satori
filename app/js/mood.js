System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var Mood;
    return {
        setters:[],
        execute: function() {
            Mood = (function () {
                function Mood(date, generalMood, apettite, sleepQuality, sleepDifficulty, sleepDreamIntensity, sleepParalysis, sleepNotes, pleasureCapacity, energyLevel, motivation, selfWorth, concentration, extStressors, dietaryNotes, stressEvents, percievedMoodInfluence, additionalNotes) {
                    this.date = date;
                    this.generalMood = generalMood;
                    this.apettite = apettite;
                    this.sleepQuality = sleepQuality;
                    this.sleepDifficulty;
                    sleepDifficulty;
                    this.sleepDreamIntensity = sleepDreamIntensity;
                    this.sleepParalysis = sleepParalysis;
                    this.sleepNotes = sleepNotes;
                    this.pleasureCapacity = pleasureCapacity;
                    this.energyLevel = energyLevel;
                    this.motivation = motivation;
                    this.selfWorth = selfWorth;
                    this.concentration = concentration;
                    this.dietaryNotes = dietaryNotes,
                        this.stressEvents = stressEvents,
                        this.percievedMoodInfluence = percievedMoodInfluence,
                        this.additionalNotes = additionalNotes;
                }
                return Mood;
            }());
            exports_1("Mood", Mood);
        }
    }
});
//# sourceMappingURL=mood.js.map