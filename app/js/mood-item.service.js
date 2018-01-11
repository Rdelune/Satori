System.register(["@angular/core", "@angular/http", "rxjs/add/operator/map"], function (exports_1, context_1) {
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
    var core_1, http_1, MoodItemService;
    return {
        setters: [
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (_1) {
            }
        ],
        execute: function () {
            MoodItemService = (function () {
                function MoodItemService(http) {
                    this.http = http;
                    this.SCOPES = ['https://www.googleapis.com/auth/drive', 'profile'];
                    this.CLIENT_ID = "495548272715-67r36m55qsd160temkqqn737aqcga8b7.apps.googleusercontent.com";
                    this.API_KEY = 'AIzaSyCdDI83cJB1AnohyAGRfFNNW7ui4p_Sea0';
                    this.FOLDER_NAME = "Dos";
                    this.FOLDER_ID = "root";
                    this.FOLDER_PERMISSION = true;
                    this.FOLDER_LEVEL = 0;
                    this.NO_OF_FILES = 1000;
                    this.DRIVE_FILES = [];
                    this.FILE_COUNTER = 0;
                    this.FOLDER_ARRAY = [];
                }
                ///FROM MOCK
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
                MoodItemService.prototype.ngOnInit = function () {
                    var _this = this;
                    // Make the HTTP request:
                    this.http.get('/api/items').subscribe(function (data) {
                        // Read the result field from the JSON response.
                        _this.results = data['results'];
                        console.log('HTTTP GET');
                        console.log(_this.results);
                    });
                };
                return MoodItemService;
            }());
            MoodItemService = __decorate([
                core_1.Injectable(),
                __metadata("design:paramtypes", [http_1.Http])
            ], MoodItemService);
            exports_1("MoodItemService", MoodItemService);
        }
    };
});
//# sourceMappingURL=mood-item.service.js.map