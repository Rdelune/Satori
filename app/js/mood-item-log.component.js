System.register(['@angular/core', '@angular/forms', '@angular/router', './mood-item.service'], function(exports_1, context_1) {
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
    var core_1, forms_1, router_1, mood_item_service_1;
    var MoodItemLogComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (forms_1_1) {
                forms_1 = forms_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (mood_item_service_1_1) {
                mood_item_service_1 = mood_item_service_1_1;
            }],
        execute: function() {
            MoodItemLogComponent = (function () {
                function MoodItemLogComponent(formBuilder, 
                    //allow access to media item service so we can add 
                    moodItemService, activatedRoute) {
                    this.formBuilder = formBuilder;
                    this.moodItemService = moodItemService;
                    this.activatedRoute = activatedRoute;
                    this.medium = '';
                    this.moodItems = [];
                }
                //tells angular that we want the lookuplist value item
                //we want to use this in the template markup so we can render out the select options in the form
                // we are using the opaque token we created, this is value type injection
                MoodItemLogComponent.prototype.ngOnInit = function () {
                    var _this = this;
                    this.paramsSubscription = this.activatedRoute.params
                        .subscribe(function (params) {
                        var medium = params['medium'];
                        if (medium.toLowerCase() === 'all') {
                            medium = '';
                        }
                        _this.getMoodItems(medium);
                    });
                };
                MoodItemLogComponent.prototype.ngOnDestroy = function () {
                    this.paramsSubscription.unsubscribe();
                };
                MoodItemLogComponent.prototype.onMoodItemDelete = function (moodItem) {
                    var _this = this;
                    this.moodItemService.delete(moodItem)
                        .subscribe(function () {
                        _this.getMoodItems(_this.medium);
                    });
                };
                MoodItemLogComponent.prototype.getMoodItems = function (medium) {
                    var _this = this;
                    this.medium = medium;
                    this.moodItemService.get(medium)
                        .subscribe(function (moodItems) {
                        _this.moodItems = moodItems;
                    });
                    console.log('MOOD ITEMS');
                    console.log(this.moodItems);
                };
                MoodItemLogComponent.prototype.percentageValidator = function (control) {
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
                MoodItemLogComponent = __decorate([
                    core_1.Component({
                        selector: 'mw-mood-item-log',
                        templateUrl: 'app/ts/mood-item-log.component.html',
                        styleUrls: ['app/ts/mood-item-log.component.css']
                    }), 
                    __metadata('design:paramtypes', [forms_1.FormBuilder, mood_item_service_1.MoodItemService, router_1.ActivatedRoute])
                ], MoodItemLogComponent);
                return MoodItemLogComponent;
            }());
            exports_1("MoodItemLogComponent", MoodItemLogComponent);
        }
    }
});
//# sourceMappingURL=mood-item-log.component.js.map