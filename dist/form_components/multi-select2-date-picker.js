//Get number of days in selected month
function daysInMonth(iMonth, iYear) {
  if (iYear == null){
    iYear = 2000; //A date that is a leap year so it shows 29 in february
  }
  iMonth = iMonth - 1; //Months are zero based.  Add 1 to make actual number of month.
  return 32 - new Date(iYear, iMonth, 32).getDate();
}

//Update Possible Days On Month Change
$('#birthday1, #birthday3').on('change', function() {
  var month = $("#birthday1").val();
  var year = $("#birthday3").val();
  if (month != 0) {
    if (year != 0) {
      var days = daysInMonth(month, year);
    }
    else {
      var days = daysInMonth(month);
    }
    var current = $("#birthday2 option:last-child").val();
    var action = days - current;
    if (action < 0) {
      //delete options
      for (i=0;i > action;i--) {
        $("#birthday2 option:last-child").remove();
      }
    }
    if (action > 0) {
      //add options
      for (i=0;i < action;i++) {
        current++
        $("#birthday2").append("<option value='" + current + "'>" + current + "</option>");
      }
    }
  }
});
