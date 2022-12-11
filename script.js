let balance = 0;
let amount=0;
let exp_amount=0;
let exptitle=0;
let expAmount = 0;
let totalexp = 0;
let temp ='';
let table = '';
counter=0;



function calculate(){
    amount=amnt.value;
    // console.log(amount);
    balance=amount;
    if(amount <= 0 ){
        alert("value cannot be empty or negative")
    }
    else{
        document.getElementById("budget_amount").innerHTML=`${amount}`;
        document.getElementById("balance_amount").innerHTML=`${amount}`;
    }
}

function reset(){
    window.location.href=("index.html");
}



function add_expense(){
    exptitle=title.value;
    expAmount=expense_amnt.value;

    if(amount<=0)
    {
        alert('Enter a valid amount')
    }
    else{
        if(expAmount <= 0){
            alert("Vlaue cannot be empty or negative");

        }
        else{
            expAmount = parseFloat(expAmount);
            totalexp += expAmount;
            balance = parseFloat(balance);
            balance -= expAmount;
    
            document.getElementById("expense_amount_1").innerHTML=`${totalexp}`;
            document.getElementById("balance_amount").innerHTML=`${balance}`;
        
       


            temp =table;
            table =`<tr>
                        <td style="font-size: 25px;border bottom 2px solid black;">${exptitle}</td>
                        <td style="font-size: 25px; ">${expAmount}</td>
                        <td onclick= "del(this)" style="font-size: 40px;" exp="${expAmount}">&#128465;</td>
                        
                    </tr>`;
                table += temp
            document.getElementById('table_list').innerHTML = table;
        }
    }    
   


}
function del(r){
    var i = r.parentNode.parentNode.rowIndex;
    document.getElementById("table_list").deleteRow(i);
        
    let delData = r.getAttribute("exp");
    totalexp -= delData;
    balance= amount;
    balance-=totalexp;
    document.getElementById("expense_amount_1").innerHTML=`${totalexp}`;
    document.getElementById("balance_amount").innerHTML=`${balance}`;
        
}  
        