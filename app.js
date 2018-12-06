require('angular');
require('angular-route');
require('angular-cookies');

var AppModule = require('./dist/module/app/app.module.js');

try {
    var appModule = new AppModule.default(window.angular);
    appModule.load();
} catch (err) {
    throw err;
}