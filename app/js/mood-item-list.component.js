System.register(["@angular/core", "@angular/router", "./mood-item.service"], function (exports_1, context_1) {
    "use strict";
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var __moduleName = context_1 && context_1.id;
    var core_1, router_1, mood_item_service_1, MoodItemListComponent;
    return {
        setters: [
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (mood_item_service_1_1) {
                mood_item_service_1 = mood_item_service_1_1;
            }
        ],
        execute: function () {
            MoodItemListComponent = (function () {
                function MoodItemListComponent(
                    //refers to an instance of my service
                    moodItemService, activatedRoute) {
                    this.moodItemService = moodItemService;
                    this.activatedRoute = activatedRoute;
                    this.medium = '';
                    this.moodItems = [];
                }
                MoodItemListComponent.prototype.ngOnInit = function () {
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
                MoodItemListComponent.prototype.ngOnDestroy = function () {
                    this.paramsSubscription.unsubscribe();
                };
                MoodItemListComponent.prototype.onMoodItemDelete = function (moodItem) {
                    var _this = this;
                    this.moodItemService.delete(moodItem)
                        .subscribe(function () {
                        _this.getMoodItems(_this.medium);
                    });
                };
                MoodItemListComponent.prototype.getMoodItems = function (medium) {
                    var _this = this;
                    this.medium = medium;
                    this.moodItemService.get(medium)
                        .subscribe(function (moodItems) {
                        _this.moodItems = moodItems;
                    });
                };
                return MoodItemListComponent;
            }());
            MoodItemListComponent = __decorate([
                core_1.Component({
                    selector: 'mw-mood-item-list',
                    templateUrl: 'app/ts/mood-item-list.component.html',
                    styleUrls: ['app/ts/mood-item-list.component.css']
                }),
                __metadata("design:paramtypes", [mood_item_service_1.MoodItemService,
                    router_1.ActivatedRoute])
            ], MoodItemListComponent);
            exports_1("MoodItemListComponent", MoodItemListComponent);
        }
    };
});
//# sourceMappingURL=mood-item-list.component.js.map