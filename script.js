//1
var marks;
var minus_marks;
var data = {};
var data2 = {};

var arr =[];
var array =[];

var newText = {};
var add_money;
var transaction;  
// var text;

var expense;
var amounts;
var y;

const balance = document.getElementById(
    "balance"
  );
  const money_plus = document.getElementById(
    "money-plus"
  );
  const money_minus = document.getElementById(
    "money-minus"
  ); 
  const list = document.getElementById("list");
  const form = document.getElementById("form");
  var text = document.getElementById("text");
  const date = document.getElementById("date");
  const amount = document.getElementById("amount");

  const localStorageTransactions = JSON.parse(localStorage.getItem('transactions'));
  
  let transactions = localStorage.getItem('transactions') !== null ? localStorageTransactions : [];
  
  //5
  //Add Transaction
  function addTransaction(e){
    e.preventDefault();
    if(text.value.trim() === '' || amount.value.trim() === '' || date.value.trim() === ''){
      alert('please add text and amount')
    }else{
       transaction = {
        id:generateID(),
        text:text.value,
        amount:+amount.value,
        date:date.value
      }
  
      transactions.push(transaction);
      addTransactionDOM(transaction);
      updateValues();
      updateLocalStorage();
      text.value='';
      amount.value='';
      date.value='';
    }
  }
  
  
  //5.5
  //Generate Random ID
  function generateID(){
    return Math.floor(Math.random()*1000000000);
  }
  
  //2
  
  //Add Trasactions to DOM list
  function addTransactionDOM(transaction) {
    //GET sign
    const sign = transaction.amount < 0 ? "-" : "+";
    const item = document.createElement("li");
  
    //Add Class Based on Value
    item.classList.add(
      transaction.amount < 0 ? "minus" : "plus"
    );

    $(sign).css("color", "yellow");
    // Math.abs to write an Absolute value in the list 
      if(sign ==  "+"  ){

    item.innerHTML = `
    <span class="sign">${sign} </span><span class="transection-text">${transaction.text}</span> 
    </span><span class="transection-date">${transaction.date}</span> 
    <span class="amount">${Math.abs(transaction.amount)}</span>
    <button class="delete-btn" onclick="removeTransaction(${transaction.id})"><i class="fa fa-trash-o" style="font-size:28px;"></i></button>`;
    list.appendChild(item);

    
    if(transaction.text == ''){
      alert("Data is not available")
    }
    else{
      updateValues()
    var name = transaction.text;
    data = {name};
   

    // console.log(marks)

    employee = {...data, ...marks}
    arr.push(employee)
    
    arr.forEach(function (o) {
      Object.keys(o).forEach(function (k) {
          if (isFinite(o[k])) {
              o[k] = +o[k];
          }
      });
  });
      
    console.log(arr)
 // Create the high chart

      Highcharts.chart('container', {
        chart: {
            type: 'pie'
        },
        title: {
            text: transaction.text
        },
        subtitle: {
            text: transaction.amount
        },
    
        accessibility: {
            announceNewData: {
                enabled: true
            },
            point: {
                valueSuffix: '%'
            }
        },
    
        plotOptions: {
            series: {
                dataLabels: {
                    enabled: true,
                    format: '{point.name}: {point.y:.1f}%'
                }
            }
        },
    
        tooltip: {
            headerFormat: '<span style="font-size:11px">{series.name}</span><br>',
            pointFormat: '<span style="color:{point.color}">{point.name}</span>: <b>{point.y:.2f}%</b> of total<br/>'
        },
    
        series: [
            {
                name: "brand",
                colorByPoint: true,
                data: arr
            }
        ],
        drilldown: {
            series: [
               
            ]
        }
    })

    }

    console.log("This is if part")
      }

      else{

        item.innerHTML = `
        <span class="sign">${sign} </span><span class="transection-text">${transaction.text}</span> 
        </span><span class="transection-date">${transaction.date}</span> 
        <span class="amount">${Math.abs(transaction.amount)}</span>
        <button class="delete-btn" onclick="removeTransaction(${transaction.id})"><i class="fa fa-trash-o" style="font-size:28px;"></i></button>`;
        list.appendChild(item);

      updateValues()
    var name = transaction.text;
    data2 = {name};
   
    var y = expense;
    minus_marks = {y}

    exp = {...data2, ...minus_marks}
    array.push(exp)
    
    array.forEach(function (o) {
      Object.keys(o).forEach(function (k) {
          if (isFinite(o[k])) {
              o[k] = +o[k];
          }
      });
  });
      
    console.log(array)
 // Create the high chart
 console.log("This is else part")

      Highcharts.chart('Expence', {
        chart: {
            type: 'pie'
        },
        title: {
            text: transaction.text
        },
        subtitle: {
            text: transaction.amount
        },
    
        accessibility: {
            announceNewData: {
                enabled: true
            },
            point: {
                valueSuffix: '%'
            }
        },
    
        plotOptions: {
            series: {
                dataLabels: {
                    enabled: true,
                    format: '{point.name}: {point.y:.1f}%'
                }
            }
        },
    
        tooltip: {
            headerFormat: '<span style="font-size:11px">{series.name}</span><br>',
            pointFormat: '<span style="color:{point.color}">{point.name}</span>: <b>{point.y:.2f}%</b> of total<br/>'
        },
    
        series: [
            {
                name: "brand",
                colorByPoint: true,
                data: array
            }
        ],
        drilldown: {
            series: [
               
            ]
        }
    })

    }
      }

  //Update the balance income and expence
  function updateValues() {
     amounts = transactions.map(
      (transaction) => transaction.amount
    );
    const total = amounts
      .reduce((acc, item) => (acc += item), 0)
      .toFixed(2);
     y = amounts
      .filter((item) => item > 0)
      .reduce((acc, item) => (acc += item), 0)
      .toFixed(2);
     expense =
      (amounts
        .filter((item) => item < 0)
        .reduce((acc, item) => (acc += item), 0) *
      -1).toFixed(2);
  
      balance.innerText=`Rs: ${total}`;

      money_plus.innerText = `Rs: ${y}`;
        marks = {y}

        // console.log(marks)
     
      money_minus.innerText = `Rs: ${expense}`;

      money_minus.innerText = `Rs: ${expense}`;
      minus_marks = expense
      
      // console.log(expense)

  }
  
  
  //6 
  
  //Remove Transaction by ID
  function removeTransaction(id){
    transactions = transactions.filter(transaction => transaction.id !== id);
    updateLocalStorage();
    Init();
  }
  //last
  //update Local Storage Transaction
  function updateLocalStorage(){
    localStorage.setItem('transactions',JSON.stringify(transactions));
  }
  
  //3
  
  //Init App
  function Init() {
    list.innerHTML = "";
    transactions.forEach(addTransactionDOM);
    updateValues();
  }
  
  Init();
  
  form.addEventListener('submit',addTransaction);



    