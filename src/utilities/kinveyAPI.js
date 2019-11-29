var Kinvey = require('kinvey');
var AppActions = require('./appActions');
//
var _init = function(){
    var promise = Kinvey.init({
        appKey    : 'kid_SJM6T-TnS',
        appSecret : '48df794c0b134886b3ed8342881a6d7c'
    });
    promise.then(function(activeUser){
        console.log('Kinvey.init:SUCCESS: activeUser:',activeUser);
        var promise = Kinvey.ping();
        promise.then(function(response) {
            console.log('Kinvey.ping:SUCCESS: Kinvey Service is alive, version: ' + response.version + ', response: ' + response.kinvey);
            AppActions.kinveyConnectionSuccess(response);
        }, function(error) {
            console.log('Kinvey.ping:ERROR:', error);
        });
    },function(error){
        console.log('Kinvey.init:ERROR:',error);
    });
};
// Public Object
var api = {
    init: function(){
        console.log('KinveyAPI:init');
    },
    initServer: function(data,AppActions){
        _init(AppActions);
    },
    initServerCallFromStore: function(){
        _init();
    }
};
module.exports = api;