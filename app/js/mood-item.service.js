System.register(['@angular/http', '@angular/core', 'rxjs/add/operator/map'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var http_1, core_1;
    var MoodItemService;
    return {
        setters:[
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (_1) {}],
        execute: function() {
            MoodItemService = (function () {
                function MoodItemService(http) {
                    this.http = http;
                    this.moodItemsServiceFile = [{
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
                        }, {
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
                        }];
                }
                MoodItemService.prototype.get = function (medium) {
                    //let searchParams = new URLSearchParams()
                    // searchParams.append('medium', medium)
                    //return this.http.get('mediaitems')
                    return; //GOES TO SUBSCRIBE FUNCTION
                    // .map(response => {return response.json().mediaitems})
                };
                MoodItemService.prototype.add = function (moodItem) {
                    this.moodItemsServiceFile.push(moodItem);
                    //return this.http.post('mediaItems', moodItem)
                    //.map(response => {}) //handle repsonse data
                };
                MoodItemService.prototype.delete = function (moodItem) {
                    var index = this.moodItemsServiceFile.indexOf(moodItem);
                    if (index >= 0) {
                        this.moodItemsServiceFile.splice(index, 1);
                    }
                    //  return this.http.delete(`mediaitems/${moodItem.id}`)
                    //     .map(response => {});
                };
                MoodItemService = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [http_1.Http])
                ], MoodItemService);
                return MoodItemService;
            }());
            exports_1("MoodItemService", MoodItemService);
        }
    }
});
//# sourceMappingURL=mood-item.service.js.map