System.register(['@angular/http', 'rxjs/Observable'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var http_1, Observable_1;
    var MockXHRBackend;
    return {
        setters:[
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (Observable_1_1) {
                Observable_1 = Observable_1_1;
            }],
        execute: function() {
            MockXHRBackend = (function () {
                function MockXHRBackend() {
                    this._moodItems = [{
                            medium: 'Sleep',
                            id: 0,
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
                            medium: 'Stressors',
                            id: 0,
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
                MockXHRBackend.prototype.createConnection = function (request) {
                    var _this = this;
                    var response = new Observable_1.Observable(function (responseObserver) {
                        var responseOptions;
                        switch (request.method) {
                            case http_1.RequestMethod.Get:
                                if (request.url.indexOf('moodItems?medium=') >= 0 || request.url === 'moodItems') {
                                    var medium;
                                    if (request.url.indexOf('?') >= 0) {
                                        medium = request.url.split('=')[1];
                                        if (medium === 'undefined')
                                            medium = '';
                                    }
                                    var moodItems;
                                    if (medium) {
                                        moodItems = _this._moodItems.filter(function (moodItem) { return moodItem.medium === medium; });
                                    }
                                    else {
                                        moodItems = _this._moodItems;
                                    }
                                    responseOptions = new http_1.ResponseOptions({
                                        body: { moodItems: JSON.parse(JSON.stringify(moodItems)) },
                                        status: 200
                                    });
                                }
                                else {
                                    var id = parseInt(request.url.split('/')[1]);
                                    moodItem = _this._moodItems.filter(function (moodItem) { return moodItem.id === id; });
                                    responseOptions = new http_1.ResponseOptions({
                                        body: JSON.parse(JSON.stringify(moodItems[0])),
                                        status: 200
                                    });
                                }
                                break;
                            case http_1.RequestMethod.Post:
                                var moodItem = JSON.parse(request.text().toString());
                                moodItem.id = _this._getNewId();
                                _this._moodItems.push(moodItem);
                                responseOptions = new http_1.ResponseOptions({ status: 201 });
                                break;
                            case http_1.RequestMethod.Delete:
                                var id = parseInt(request.url.split('/')[1]);
                                _this._deleteMoodItem(id);
                                responseOptions = new http_1.ResponseOptions({ status: 200 });
                        }
                        var responseObject = new http_1.Response(responseOptions);
                        responseObserver.next(responseObject);
                        responseObserver.complete();
                        return function () { };
                    });
                    return { response: response };
                };
                MockXHRBackend.prototype._deleteMoodItem = function (id) {
                    var moodItem = this._moodItems.find(function (moodItem) { return moodItem.id === id; });
                    var index = this._moodItems.indexOf(moodItem);
                    if (index >= 0) {
                        this._moodItems.splice(index, 1);
                    }
                };
                MockXHRBackend.prototype._getNewId = function () {
                    if (this._moodItems.length > 0) {
                        return Math.max.apply(Math, this._moodItems.map(function (moodItem) { return moodItem.id; })) + 1;
                    }
                    else {
                        return 1;
                    }
                };
                return MockXHRBackend;
            }());
            exports_1("MockXHRBackend", MockXHRBackend);
        }
    }
});
//# sourceMappingURL=mock-xhr-backend.js.map