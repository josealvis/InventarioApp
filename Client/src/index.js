 var Vue = require('vue');


 var app = new Vue({
     el: '#app',
     data: {text: 'foo'}

 });

 var text = require('./example');

document.write(text);
