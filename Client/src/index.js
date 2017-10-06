const Vue = require('vue');


 var app = new Vue({
     el: '#app',
     data: {text: 'foo'},
     methods : {call}
     

 });

 function call(){
     alert('ok');
 }

 //var text = require('./example');

//document.write(text);
