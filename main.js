'use strict';

let time = 0;
let milSec = 0;
let sec = 0;
let min = 0;
let hour = 0;
let timerId;

$(document).ready(function(){
    display();
    $('#start').removeAttr('disabled');
    $('#stop').attr('disabled','true');
    $('#reset').attr('disabled','true');


    $('#start').click(function(){
        timerId = setInterval(start,100);
        $('#start').attr('disabled','true');
        $('#stop').removeAttr('disabled');
        $('#reset').removeAttr('disabled');
    });

    $('#stop').click(function(){
        clearInterval(timerId);
        $('#start').removeAttr('disabled');
        $('#stop').attr('disabled','true');
        $('#reset').removeAttr('disabled');
    });
    
    $('#reset').click(function(){
        clearInterval(timerId);
        time = 0;
        milSec = 0;
        sec = 0;
        min = 0;
        hour = 0;
        timerId = 0;

        display();

        $('#start').removeAttr('disabled');
        $('#stop').attr('disabled','true');
        $('#reset').attr('disabled','true');
    });


    function start(){
        time++;
        milSec = Math.floor(time%10);
        sec = Math.floor(time/10%60) ;
        min = Math.floor(time/10/60%60);
        hour = Math.floor(time/10/60/60);

        display();
    }

    function display(){
        $('#milSec').text(milSec);
        $('#sec').text(sec);
        $('#min').text(min);
        $('#hour').text(hour);
    }

});