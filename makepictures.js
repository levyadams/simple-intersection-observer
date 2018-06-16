window.addEventListener('DOMContentLoaded',function(){
   var main = this.document.getElementById('main-content');
    var counter = 60;
 var picture = this.document.getElementById('picture');
    for(var i=0;i<counter;i++){
        var tmp = picture.cloneNode(true);
        main.append(tmp);
    }
});