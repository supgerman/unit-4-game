$(document).ready(function(){

    // var newValue = 0;
    var newNumber = 0;
    var addedValue = 0;
    var redValue = 0;
    var blueValue = 0;
    var yellowValue = 0;
    var greenValue = 0;
    var match = 0;
    var loseCount = 0;
    var winCount = 0;

    //Assigns new value to crystals
    redValue =Math.floor(Math.random()* 12+1);
    $("#red").hmtl = redValue;
    blueValue =Math.floor(Math.random()* 15+1);
    $("#red").hmtl = blueValue;
    yellowValue =Math.floor(Math.random()* 7+1);
    $("#red").hmtl = yellowValue;
    greenValue =Math.floor(Math.random()* 4+1);
    $("#red").hmtl = greenValue;
    console.log(redValue);
    console.log(blueValue);
    console.log(yellowValue);
    console.log(greenValue);

    //at start generate a random number
        newNumber=[Math.floor(Math.random()* 100)];

    //display random number
        document.getElementById("random-number").innerHTML = newNumber;

    //update random number based on added value
          $("#red").click(function() {
        addedValue = addedValue  + redValue;
        score()
        // console.log(addedValue);
        });
        $("#blue").on("click", function() {
            addedValue = addedValue  + blueValue;
            score()
            // console.log(addedValue);
            });
            $("#yellow").on("click", function() {
                addedValue = addedValue  + yellowValue;
                score()
                // console.log(addedValue);
                });
                $("#green").on("click", function() {
                    addedValue = addedValue  + greenValue;
                    score()
                    // console.log(addedValue);
                    });
        function score(){
        $(".score").html(addedValue)
    
            if (addedValue == newNumber){
                winCount++
                $(".win").html("<h2>"+winCount+"</h2>");
            }   
            else if (addedValue > newNumber){
                loseCount++
                $(".lose").html("<h2>"+loseCount+"</h2>");
            }
        }


            // else


 });