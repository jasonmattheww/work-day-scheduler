//Call varibales
var currentDayEl = $('#currentDay');
var saveButton = $('.saveBtn');

//Sets the current hour
var hour = dayjs().hour();

//Displays the current day of the week, month, and number day
function displayDay() {
  var rightNow = dayjs().format('dddd, MMM DD');
  currentDayEl.text(rightNow);
}

//Displays whether each time block is past, present, or future and will set a certain color to the corresponding time block
function hourofDay() {
  $('.time-block').each(function () {
   var eachHour = parseInt($(this).attr('id'));
   
   if (eachHour < hour) {
    $(this).addClass("past");
   }
   else if (eachHour === hour) {
    $(this).addClass("present");
   }
   else {
    $(this).addClass("future");
   }
  })
}

//When you clock the save icon it will store it in the localstorage
$('.saveBtn').on('click', function () {
  var key = $(this).siblings('.description').val();
  var value = $(this).parent().attr('id');

  localStorage.setItem(value, key);
});

//When you refresh the page the events will persist
$('#9am .description').val(localStorage.getItem('9am'));
$('#10am .description').val(localStorage.getItem('10am'));
$('#11am .description').val(localStorage.getItem('11am'));
$('#12pm .description').val(localStorage.getItem('12pm'));
$('#13pm .description').val(localStorage.getItem('13pm'));
$('#14pm .description').val(localStorage.getItem('14pm'));
$('#15pm .description').val(localStorage.getItem('15pm'));
$('#16pm .description').val(localStorage.getItem('16pm'));
$('#17pm .description').val(localStorage.getItem('17pm'));

//Calls function
displayDay();
hourofDay();