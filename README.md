# Monthly-Expense-Tracker-With-HighCharts (JavaScript-Project)

Quick View Demo:
https://arslansaeed992.github.io/monthly-expence-tracker-JavaScript-Project/

Tracking where your money is going is the process of writing down what you spend using core Java Script as well as Html and bootstrap

<!DOCTYPE html>
<html lang="en"> 
<head>
        <!-- responsive links -->
        <meta charset="UTF-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
       
        <!-- Style Sheet Include  -->
        <link rel="stylesheet" type="text/css" href="style.css" />
       
        <!-- title and favicon -->
        <link rel="icon" href="card.svg">
        <title>Flash Card</title>

        <!-- CSS Style Sheet  -->
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.0.0/dist/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous">

        <!-- Bootstrap Include  -->
        <script src="https://code.jquery.com/jquery-3.2.1.slim.min.js" integrity="sha384-KJ3o2DKtIkvYIK3UENzmM7KCkRr/rE9/Qpg6aAZGJwFDMVNA/GpGFF93hXpG5KkN" crossorigin="anonymous"></script>
        <script src="https://cdn.jsdelivr.net/npm/popper.js@1.12.9/dist/umd/popper.min.js" integrity="sha384-ApNbgh9B+Y1QKtv3Rn7W3mgPxhU9K/ScQsAP7hUibX39j7fakFPskvXusvfa0b4Q" crossorigin="anonymous"></script>
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@4.0.0/dist/js/bootstrap.min.js" integrity="sha384-JZR6Spejh4U02d8jOt6vLEHfe/JQGiRRSQQxSfFWpi1MquVdAyjUar5+76PVCmYl" crossorigin="anonymous"></script>

</head>
<body>

    <script>
      
  </script>

    <div class="container">
        <div class="row" id="row-1">
        <div  class="col-md-8 col-sm-7" style="margin-top: 30px;">
            <h1>Flash Card</h1>
            <br/>
            <div>
                <button type="button" id="question_Btn" class="btn btn-outline-warning btn-lg">Add Question</button>
            <button type="button" class="btn btn-outline-danger btn-lg" id="delete_cards">Delete Cards</button>
            <br/><br/>
            </div>

            <div class="screen-body-item" id="form-1">
              <!-- <div class="app-form"> -->
                <div class="app-form" id="form"  >
                    <div class="form-group showdata" style="padding-left: 30px; size: 30px; width: 50%; border-radius: 5px;"><p id="showdata"></p></div>
                    <button id="cross_btn" onclick="clear_form()" class="btn btn-outline-info">❌</button>

                    <div class="form-group boder">
                    <!-- option for taking the input -->
                    <label class="form-label" for="textAreaExample"><h3>Question</h3></label>
                    <textarea class="form-control" name="question" id="question" rows="4" required></textarea>
                  </div>
    
                  <div class="form-group boder">
                    <label class="form-label" for="textAreaExample"><h3>Answer</h3></label>
                    <textarea class="form-control"name="answer" id="answer" rows="4" required></textarea>
                  </div>
                  <br/>
                    <input type="submit" id="save_card" value="SAVE" class="btn btn-outline-success btn-lg form-button"/>
                    <br/><br/>
                  </div>
                </div>  
           </div>

  <!-- section of add new cards  -->
    <section>
      <div class="container">
        <div id="flashcards"></div>
      </div>
    </section>

 <!-- JS file inclluding all functions -->
<script src="script.js"></script>

</body>
</html>
