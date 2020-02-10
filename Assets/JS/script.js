$(document).ready(function() {

    var currentDateAndTime = Date(Date.now());// exp: Fri Oct 25 2019 17:40:56 GMT-0400 (Eastern Daylight Time)`

    var currentHour = new Date().getHours();//Current hour in military time`

    console.log(currentDateAndTime);
    console.log(currentHour);

    // Display current date at in the jumbotron
    $("#currentDay").append(currentDateAndTime);

    // holds slots
    var plannerSlots = ["9 a.m.", "10 a.m.", "11 a.m.", "12 p.m.", "13 p.m.", "14 p.m.", "15 p.m.", "16 p.m.", "17 p.m."];



    for (var i=0; i<plannerSlots.length; i++){

        //creates a row and assign class and attributes
        var containerDiv= $("#maindiv");
        
        var newDiv = $('<div class="row" id="dailyrow">');
        containerDiv.append(newDiv,"<hr>");
        newDiv.attr("data-id", plannerSlots[i]);
        newDiv.addClass("row");
    
        // create span, textarea and button in each row
        var newSpan = $('<span id="activitytime">');
        newDiv.append(newSpan);
        newSpan.text(plannerSlots[i]);
        newSpan.attr("data-usertime", plannerSlots[i]);
        newSpan.addClass("time-block");

        var newInput = $('<textarea class="textarea" id="userinput">');
        newDiv.append(newInput);
        newInput.attr("data-in", plannerSlots[i]);
        newInput.addClass("description");

        var newButton = $('<button id="savebutton">');
        newDiv.append(newButton);
        newButton.attr("data-let", plannerSlots[i]);
        newButton.text("Save");
        newButton.addClass("saveBtn");

        
        
    }
    $("#savebutton").click(function(event) {

        
   
        event.preventDefault();
        localStorage.setItem($("#userinput").text());
        localStorage.setItem($("#activitytime").text());
        
        var finalTime  = $("textarea").text($(this).attr("data-let"));
        
     
        console.log(finalTime);

        if (parseInt(plannerSlots[i]) === currentHour){
            $("textarea").addClass("class", "present");
            
        } else if (parseInt(plannerSlots[i])  < currentHour){
            $("textarea").addClass("class", "past");
        } else {
            $("textarea").addClass("class", "futur");
        }
        
    });
       
    

    
  
       
      

});

