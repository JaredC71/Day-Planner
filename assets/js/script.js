//assign each text area to a variable name for later use
var NineBlock = $('#9am-block'); 
var TenBlock = $('#10am-block');
var ElevenBlock = $('#11am-block');
var TwelveBlock = $('#12pm-block');
var OneBlock = $('#1pm-block');
var TwoBlock = $('#2pm-block');
var ThreeBlock = $('#3pm-block');
var FourBlock = $('#4pm-block');
var FiveBlock = $('#5pm-block');
//grab each time number asssociated with each block. Later, this value will be parsed as an integer and compared to the current hour
var nineTimeEl = $('#time-9').text();
var TenTimeEl = $('#time-10').text();
var ElevenTimeEl = $('#time-11').text();
var TwelveTimeEl = $('#time-12').text();
var OneTimeEl = $('#time-1').text();
var TwoTimeEl = $('#time-2').text();
var ThreeTimeEl = $('#time-3').text();
var FourTimeEl = $('#time-4').text();
var FiveTimeEl = $('#time-5').text();

//create an empty array for each time block, also give each timeblock its own local storage key 
var NineVal = [];
var NineLocal = JSON.parse(localStorage.getItem('9am-item'));
if (NineLocal === null) {
    NineLocal = NineVal;
}
var TenVal = [];
var TenLocal = JSON.parse(localStorage.getItem('10am-item'));
if (TenLocal === null) {
    TenLocal = TenVal;
}
var ElevenVal = [];
var ElevenLocal = JSON.parse(localStorage.getItem('11am-item'));
if (ElevenLocal === null) {
    ElevenLocal = ElevenVal;
}
var TwelveVal = [];
var TwelveLocal = JSON.parse(localStorage.getItem('12pm-item'));
if (TwelveLocal === null) {
    TwelveLocal = TwelveVal;
}
var OneVal = [];
var OneLocal = JSON.parse(localStorage.getItem('1pm-item'));
if (OneLocal === null) {
    OneLocal = OneVal;
}
var TwoVal = [];
var TwoLocal = JSON.parse(localStorage.getItem('2pm-item'));
if (TwoLocal === null) {
    TwoLocal = TwoVal;
}
var ThreeVal = [];
var ThreeLocal = JSON.parse(localStorage.getItem('3pm-item'));
if (ThreeLocal === null) {
    ThreeLocal = ThreeVal;
}
var FourVal = [];
var FourLocal = JSON.parse(localStorage.getItem('4pm-item'));
if (FourLocal === null) {
    FourLocal = FourVal;
}
var FiveVal = [];
var FiveLocal = JSON.parse(localStorage.getItem('5pm-item'));
if (FiveLocal === null) {
    FiveLocal = FiveVal;
}


//every edit button
var allEditBtns = $('.btn');
//every textarea
var allTextBlocks = $('.form-control');
var btndata = [NineBlock, TenBlock, ElevenBlock, TwelveBlock, OneBlock, TwoBlock, ThreeBlock, FourBlock, FiveBlock];


//This function is assigned to every to edit button. It targets the textarea element associated with the edit button that was clicked
//This function toggles the attribute of disabled and pushes the textarea value into the correct local storage key associated with that time


function submitItem(event) {
    var target = $(event.target);
    var targetTextArea = target.parent().parent().siblings('.form-control');
    targetTextArea.attr('disabled', 'disabled');
    if (targetTextArea.attr('id') == '9am-block') {
 
        NineVal.pop();
        NineVal.push(targetTextArea.val());

        localStorage.setItem('9am-item', JSON.stringify(NineVal));

    } else if (targetTextArea.attr('id') == '10am-block') {
        
        TenVal.pop();
        TenVal.push(targetTextArea.val());
        localStorage.setItem('10am-item', JSON.stringify(TenVal));

    } else if (targetTextArea.attr('id') == '11am-block') {
        ElevenVal.pop();
        ElevenVal.push(targetTextArea.val());
        localStorage.setItem('11am-item', JSON.stringify(ElevenVal));

    } else if (targetTextArea.attr('id') == '12pm-block') {
        TwelveVal.pop();
        TwelveVal.push(targetTextArea.val());
        localStorage.setItem('12pm-item', JSON.stringify(TwelveVal));

    } else if (targetTextArea.attr('id') == '1pm-block') {
        OneVal.pop();
        OneVal.push(targetTextArea.val());
        localStorage.setItem('1pm-item', JSON.stringify(OneVal));

    } else if (targetTextArea.attr('id') == '2pm-block') {
        TwoVal.pop();
        TwoVal.push(targetTextArea.val());
        localStorage.setItem('2pm-item', JSON.stringify(TwoVal));

    } else if (targetTextArea.attr('id') == '3pm-block') {
        ThreeVal.pop();
        ThreeVal.push(targetTextArea.val());
        localStorage.setItem('3pm-item', JSON.stringify(ThreeVal));

    } else if (targetTextArea.attr('id') == '4pm-block') {
        FourVal.pop();
        FourVal.push(targetTextArea.val());
        localStorage.setItem('4pm-item', JSON.stringify(FourVal));

    } else {
        FiveVal.pop();
        FiveVal.push(targetTextArea.val());
        localStorage.setItem('5pm-item', JSON.stringify(FiveVal));

    }

    return;


}
function getTextAreaIconBtn(event) {
    var target = $(event.target);
    target.removeAttr('disabled');
    console.log(10);
    // if (targetTextArea.attr('id') == '9am-block') {
 
    //     NineVal.pop();
    //     NineVal.push(targetTextArea.val());

    //     localStorage.setItem('9am-item', JSON.stringify(NineVal));

    // } else if (targetTextArea.attr('id') == '10am-block') {
        
    //     TenVal.pop();
    //     TenVal.push(targetTextArea.val());
    //     localStorage.setItem('10am-item', JSON.stringify(TenVal));

    // } else if (targetTextArea.attr('id') == '11am-block') {
    //     ElevenVal.pop();
    //     ElevenVal.push(targetTextArea.val());
    //     localStorage.setItem('11am-item', JSON.stringify(ElevenVal));

    // } else if (targetTextArea.attr('id') == '12pm-block') {
    //     TwelveVal.pop();
    //     TwelveVal.push(targetTextArea.val());
    //     localStorage.setItem('12pm-item', JSON.stringify(TwelveVal));

    // } else if (targetTextArea.attr('id') == '1pm-block') {
    //     OneVal.pop();
    //     OneVal.push(targetTextArea.val());
    //     localStorage.setItem('1pm-item', JSON.stringify(OneVal));

    // } else if (targetTextArea.attr('id') == '2pm-block') {
    //     TwoVal.pop();
    //     TwoVal.push(targetTextArea.val());
    //     localStorage.setItem('2pm-item', JSON.stringify(TwoVal));

    // } else if (targetTextArea.attr('id') == '3pm-block') {
    //     ThreeVal.pop();
    //     ThreeVal.push(targetTextArea.val());
    //     localStorage.setItem('3pm-item', JSON.stringify(ThreeVal));

    // } else if (targetTextArea.attr('id') == '4pm-block') {
    //     FourVal.pop();
    //     FourVal.push(targetTextArea.val());
    //     localStorage.setItem('4pm-item', JSON.stringify(FourVal));

    // } else {
    //     FiveVal.pop();
    //     FiveVal.push(targetTextArea.val());
    //     localStorage.setItem('5pm-item', JSON.stringify(FiveVal));

    // }



}

//this function sets the value of every textarea to the content stored in the associated local storage key
function displayStorage() {
    $('#9am-block').val(JSON.parse(localStorage.getItem('9am-item')));
    $('#10am-block').val(JSON.parse(localStorage.getItem('10am-item')));
    $('#11am-block').val(JSON.parse(localStorage.getItem('11am-item')));
    $('#12pm-block').val(JSON.parse(localStorage.getItem('12pm-item')));
    $('#1pm-block').val(JSON.parse(localStorage.getItem('1pm-item')));
    $('#2pm-block').val(JSON.parse(localStorage.getItem('2pm-item')));
    $('#3pm-block').val(JSON.parse(localStorage.getItem('3pm-item')));
    $('#4pm-block').val(JSON.parse(localStorage.getItem('4pm-item')));
    $('#5pm-block').val(JSON.parse(localStorage.getItem('5pm-item')));

}
//when the icon is clicked, call the function getTextAreaIconBtn
$('.fas').on('click', submitItem);
$('.input-group').on('click', getTextAreaIconBtn);
//display content in local storage on refresh
displayStorage();

//this function displays the current time updating every second along with calling our backgroundchanging function everysecond
function clockWork() {
    setInterval(function() {
        $('#currentDay').text(moment().format('MMMM Do YYYY, h:mm:ss a'));
        // console.log(moment().format('h'));
        backGroundChanger();

    }, 1000)

    
}
//calls every textarea block background changing function
function backGroundChanger() {
    
    NineBlockChangeover();
    TenBlockChangeover();
    ElevenBlockChangeover();
    TweleveBlockChangeover();
    OneBlockChangeover();
    TwoBlockChangeover();
    ThreeBlockChangeover();
    FourBlockChangeover();
    FiveBlockChangeover();
   
}
//I created a function for each timeblock due to edge cases such whether its am, pm, 1pm, etc. when the criteria is met, the textarea is assigned a certain class that changes the background color
function NineBlockChangeover() {
    if(parseInt(nineTimeEl) > parseInt(moment().format('h')) && moment().format('a') == 'am') {
        NineBlock.removeClass('past');
        NineBlock.addClass('future');
    }
    else if(parseInt(nineTimeEl) == parseInt(moment().format('h')) && moment().format('a') == 'am') {
        NineBlock.removeClass('future');

        NineBlock.addClass('present');
        
    } else {
        NineBlock.removeClass('present');
        NineBlock.addClass('past');
        
    }
}
function TenBlockChangeover() {
    if(parseInt(TenTimeEl) > parseInt(moment().format('h')) && moment().format('a') == 'am') {
        
        TenBlock.removeClass('past');
        TenBlock.addClass('future');
    }
    else if(parseInt(TenTimeEl) == parseInt(moment().format('h')) && moment().format('a') == 'am') {
        TenBlock.removeClass('future');

        TenBlock.addClass('present');
        
    } else {
        TenBlock.removeClass('present');
        TenBlock.addClass('past');
        
    }
}
function ElevenBlockChangeover() {
    if(parseInt(ElevenTimeEl) > parseInt(moment().format('h')) && moment().format('a') == 'am') {
        ElevenBlock.removeClass('past');
        ElevenBlock.addClass('future');
    }
    else if(parseInt(ElevenTimeEl) == parseInt(moment().format('h')) && moment().format('a') == 'am') {
        ElevenBlock.removeClass('future');

        ElevenBlock.addClass('present');
        
    } else {
        ElevenBlock.removeClass('present');
        ElevenBlock.addClass('past');
        
    }
}
function TweleveBlockChangeover() {
    if(parseInt(TwelveTimeEl) > parseInt(moment().format('h')) && moment().format('a') == 'am') {
        TwelveBlock.removeClass('past');
        TwelveBlock.addClass('future');
    }
    else if(parseInt(TwelveTimeEl) == parseInt(moment().format('h')) && moment().format('a') == 'pm') {
        TwelveBlock.removeClass('future');

        TwelveBlock.addClass('present');
        
    } else {
        TwelveBlock.removeClass('present');
        TwelveBlock.addClass('past');
        
    }
}
function OneBlockChangeover() {
    if(parseInt(OneTimeEl) > parseInt(moment().format('h')) || moment().format('a') == 'am' || moment().format('h') == '12') {
        OneBlock.removeClass('past');
        OneBlock.addClass('future');
    }
    else if(parseInt(OneTimeEl) == parseInt(moment().format('h')) && moment().format('a') == 'pm') {
        OneBlock.removeClass('future');

        OneBlock.addClass('present');
        
    } else {
        OneBlock.removeClass('present');
        OneBlock.addClass('past');
        
    }
}
function TwoBlockChangeover() {
    if(parseInt(TwoTimeEl) > parseInt(moment().format('h')) && moment().format('a') == 'pm'|| moment().format('a') == 'am' || moment().format('h') == '12') {
        TwoBlock.removeClass('past');
        TwoBlock.addClass('future');
    }
    else if(parseInt(TwoTimeEl) == parseInt(moment().format('h')) && moment().format('a') == 'pm') {
        TwoBlock.removeClass('future');

        TwoBlock.addClass('present');
        
    } else {
        TwoBlock.removeClass('present');
        TwoBlock.addClass('past');
        
    }
}
function ThreeBlockChangeover() {
    if(parseInt(ThreeTimeEl) > parseInt(moment().format('h')) && moment().format('a') == 'pm'|| moment().format('a') == 'am' ||  moment().format('h') == '12') {
        ThreeBlock.removeClass('past');
        ThreeBlock.addClass('future');
    }
    else if(parseInt(ThreeTimeEl) == parseInt(moment().format('h')) && moment().format('a') == 'pm') {
        ThreeBlock.removeClass('future');

        ThreeBlock.addClass('present');
        
    } else {
        ThreeBlock.removeClass('present');
        ThreeBlock.addClass('past');
        
    }
}
function FourBlockChangeover() {
    if(parseInt(FourTimeEl) > parseInt(moment().format('h')) && moment().format('a') == 'pm'|| moment().format('a') == 'am' || moment().format('h') == '12') {
        FourBlock.addClass('past');
        FourBlock.addClass('future');
    }
    else if(parseInt(FourTimeEl) == parseInt(moment().format('h')) && moment().format('a') == 'pm') {
        FourBlock.removeClass('future');

        FourBlock.addClass('present');
        
    } else {
        FourBlock.removeClass('present');
        FourBlock.addClass('past');
        
    }
}
function FiveBlockChangeover() {
    if(parseInt(FiveTimeEl) > parseInt(moment().format('h')) && moment().format('a') == 'pm'|| moment().format('a') == 'am' || moment().format('h') == '12') {
        FiveBlock.removeClass('past');
        FiveBlock.addClass('future');
    }
    else if(parseInt(FiveTimeEl) == parseInt(moment().format('h')) && moment().format('a') == 'pm') {
        FiveBlock.removeClass('future');

        FiveBlock.addClass('present');
        
    } else {
        FiveBlock.removeClass('present');
        FiveBlock.addClass('past');
        
    }
}

//intiate the clock and background changer on refresh
clockWork();



