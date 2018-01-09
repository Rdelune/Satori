System.register(['@angular/core'], function(exports_1, context_1) {
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
    var core_1;
    var MoodItemComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            MoodItemComponent = (function () {
                function MoodItemComponent() {
                    this.delete = new core_1.EventEmitter();
                    this.exampleProperty = 'example mood property';
                    this.exampleTextContent = 'example text content';
                    this.firstMoodItem = [{
                            generalMood: 50,
                            apettite: 50,
                            pleasureCapacity: 50,
                            energyLevel: 50,
                            motivation: 50,
                            selfWorth: 50,
                            concentration: 50,
                            additionalNotes: 0
                        }, {
                            generalMood: 50,
                            apettite: 50,
                            pleasureCapacity: 50,
                            energyLevel: 50,
                            motivation: 50,
                            selfWorth: 50,
                            concentration: 50,
                            additionalNotes: 0
                        }];
                }
                MoodItemComponent.prototype.exampleMethod = function () {
                    return 'example function complete';
                };
                MoodItemComponent.prototype.onDelete = function () {
                    this.delete.emit(this.moodItem);
                    console.log('deleted');
                };
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', Object)
                ], MoodItemComponent.prototype, "moodItem", void 0);
                __decorate([
                    core_1.Output(), 
                    __metadata('design:type', Object)
                ], MoodItemComponent.prototype, "delete", void 0);
                MoodItemComponent = __decorate([
                    core_1.Component({
                        selector: 'mw-mood-item',
                        templateUrl: 'app/ts/mood-item.component.html',
                        styleUrls: ['app/ts/mood-item.component.css']
                    }), 
                    __metadata('design:paramtypes', [])
                ], MoodItemComponent);
                return MoodItemComponent;
            }());
            exports_1("MoodItemComponent", MoodItemComponent);
        }
    }
});
//# sourceMappingURL=mood-item.component.js.map