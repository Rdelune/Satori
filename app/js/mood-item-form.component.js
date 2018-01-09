System.register(['@angular/core', '@angular/forms', './mood-item.service', './providers', '@angular/router'], function(exports_1, context_1) {
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
    var __param = (this && this.__param) || function (paramIndex, decorator) {
        return function (target, key) { decorator(target, key, paramIndex); }
    };
    var core_1, forms_1, mood_item_service_1, providers_1, router_1;
    var MoodItemFormComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (forms_1_1) {
                forms_1 = forms_1_1;
            },
            function (mood_item_service_1_1) {
                mood_item_service_1 = mood_item_service_1_1;
            },
            function (providers_1_1) {
                providers_1 = providers_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            }],
        execute: function() {
            MoodItemFormComponent = (function () {
                function MoodItemFormComponent(formBuilder, moodItemService, lookupLists, router) {
                    this.formBuilder = formBuilder;
                    this.moodItemService = moodItemService;
                    this.lookupLists = lookupLists;
                    this.router = router;
                }
                MoodItemFormComponent.prototype.ngOnInit = function () {
                    this.form = this.formBuilder.group({
                        date: this.formBuilder.control(new Date()),
                        generalMood: this.formBuilder.control('50'),
                        appetite: this.formBuilder.control('50', forms_1.Validators.compose([
                            forms_1.Validators.required,
                            forms_1.Validators.pattern('[\\w\\-\\s\\/]+')
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
                    });
                };
                MoodItemFormComponent.prototype.motivationValidator = function (control) {
                    if (control.value.trim().length === 0) {
                        return null;
                    }
                    var inputValue = parseInt(control.value);
                    var minValue = 1;
                    var maxValue = 100;
                    if (inputValue >= minValue && inputValue <= maxValue) {
                        return null;
                    }
                    else {
                        return {
                            'inputValue': {
                                min: minValue,
                                max: maxValue
                            }
                        };
                    }
                };
                MoodItemFormComponent.prototype.onSubmit = function (mediaItem) {
                    var _this = this;
                    event.preventDefault();
                    console.log(mediaItem);
                    var convertedMoodItem = JSON.stringify(mediaItem);
                    this.moodItemService.add(mediaItem)
                        .subscribe(function () {
                        _this.router.navigate(['/', mediaItem.medium]);
                        //route to the appropriate list on submission
                    });
                };
                MoodItemFormComponent = __decorate([
                    core_1.Component({
                        selector: 'mw-mood-item-form',
                        templateUrl: 'app/ts/mood-item-form.component.html',
                        styleUrls: ['app/ts/mood-item-form.component.css']
                    }),
                    __param(2, core_1.Inject(providers_1.lookupListToken)), 
                    __metadata('design:paramtypes', [forms_1.FormBuilder, mood_item_service_1.MoodItemService, Object, router_1.Router])
                ], MoodItemFormComponent);
                return MoodItemFormComponent;
            }());
            exports_1("MoodItemFormComponent", MoodItemFormComponent);
        }
    }
});
//# sourceMappingURL=mood-item-form.component.js.map