System.register(['@angular/core', './mood-item.service', '@angular/router'], function(exports_1, context_1) {
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
    var core_1, mood_item_service_1, router_1;
    var MoodItemListComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (mood_item_service_1_1) {
                mood_item_service_1 = mood_item_service_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            }],
        execute: function() {
            MoodItemListComponent = (function () {
                function MoodItemListComponent(moodItemService, activatedRoute) {
                    this.moodItemService = moodItemService;
                    this.activatedRoute = activatedRoute;
                    this.timeOfDay = '';
                    this.moodItems = [];
                    this.delete = new core_1.EventEmitter(); //learn about aliases
                }
                MoodItemListComponent.prototype.ngOnInit = function () {
                    var _this = this;
                    this.paramsSubscription = this.activatedRoute.params.subscribe(); //this.moodItems = this.moodItemService.get(this.timeOfDay)
                    this.activatedRoute.params.subscribe(function (params) {
                        var medium = params['medium'];
                        if (medium.toLowerCase)
                             === 'all';
                        {
                            medium = '';
                        }
                        _this.getMediaItems(medium);
                    });
                };
                MoodItemListComponent.prototype.ngOnDestroy = function () {
                    this.paramsSubscription.unsubscribe();
                };
                //exposes event that can be subscribed to on our custom eleemtn
                // t
                MoodItemListComponent.prototype.onSelect = function (mood) {
                    console.log(JSON.stringify(mood));
                };
                MoodItemListComponent.prototype.onMoodItemDelete = function (moodItem) {
                    console.log('deleted entry');
                    //this.delete.emit(this.playlistItem);
                    this.moodItemService.delete(moodItem);
                    //created this above - using its method now
                };
                MoodItemListComponent.prototype.getMediaItems = function (timeOfDay) {
                    var _this = this;
                    this.timeOfDay = timeOfDay;
                    this.moodItemService.get(timeOfDay)
                        .subscribe(function (moodItems) {
                        _this.moodItems = moodItems;
                    });
                };
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', Object)
                ], MoodItemListComponent.prototype, "playlistItem", void 0);
                __decorate([
                    core_1.Output(), 
                    __metadata('design:type', Object)
                ], MoodItemListComponent.prototype, "delete", void 0);
                MoodItemListComponent = __decorate([
                    core_1.Component({
                        selector: 'mw-mood-item-list',
                        templateUrl: 'app/ts/mood-item-list.component.html',
                        styleUrls: ['app/ts/app.component.css'],
                    }), 
                    __metadata('design:paramtypes', [mood_item_service_1.MoodItemService, router_1.ActivatedRoute])
                ], MoodItemListComponent);
                return MoodItemListComponent;
            }());
            exports_1("MoodItemListComponent", MoodItemListComponent);
        }
    }
});
//# sourceMappingURL=mood-item-list.component.js.map