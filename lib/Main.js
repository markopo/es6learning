'use strict';

function disCountPrice(total) {
    var discount = arguments.length <= 1 || arguments[1] === undefined ? .1 : arguments[1];

    return total - total * discount;
}

window.onload = function () {

    var marko = new Person('marko');
    var greeting = marko.greet();
    var message1 = document.getElementById("message1");
    message1.innerHTML = greeting;

    var tasks = new TaskCollection([new Task('diska'), new Task('tvätta'), new Task('dammsuga')]);

    tasks.log();

    var d = disCountPrice(100);
    alert('discount: ' + d);
};