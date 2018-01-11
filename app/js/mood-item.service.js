System.register(['@angular/core', '@angular/http', 'rxjs/add/operator/map'], function(exports_1, context_1) {
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
    var core_1, http_1;
    var MoodItemService;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (_1) {}],
        execute: function() {
            //get and set data from the data store
            //in this case, display items
            //can wrap up a formula here and use it wherever
            //specific things that are none component specific
            MoodItemService = (function () {
                function MoodItemService(http) {
                    this.http = http;
                }
                MoodItemService.prototype.get = function (medium) {
                    var searchParams = new http_1.URLSearchParams();
                    searchParams.append('medium', medium);
                    return this.http.get('moodItems', { search: searchParams })
                        .map(function (response) {
                        return response.json().moodItems;
                    });
                };
                MoodItemService.prototype.add = function (moodItem) {
                    return this.http.post('moodItems', moodItem)
                        .map(function (response) { });
                };
                MoodItemService.prototype.delete = function (moodItem) {
                    return this.http.delete("moodItems/" + moodItem.id)
                        .map(function (response) { });
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