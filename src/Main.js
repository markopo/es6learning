






window.onload = function () {
    
    var marko = new Person('marko'); 
    var greeting = marko.greet(); 
    var message1 = document.getElementById("message1"); 
    message1.innerHTML = greeting; 

    var tasks = new TaskCollection([ new Task('diska'), new Task('tvätta'), new Task('dammsuga') ]); 

    tasks.log(); 
    


}; 