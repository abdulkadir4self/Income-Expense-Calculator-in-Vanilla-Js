const head1 = document.getElementById('head1');
const head2 = document.getElementById('head2');
const head5 = document.getElementById('head5');
const head6 = document.getElementById('head6');
const inp1 = document.getElementById('inp1');
const inp2 = document.getElementById('inp2');
const dropdown = document.getElementById('dropdown');
const INtable = document.getElementById('IN-table');
const EXtable = document.getElementById('EX-table');
const btn1 = document.getElementById('btn1')
const span1 = document.getElementById('span1');
const span2 = document.getElementById('span2');
const message = document.getElementById('message');
const saving = document.getElementById('saving')


let total = 0;
let totalExpense = 0;
let totalSaving = 0;
let no = 1;
let noExpense=1;

btn1.addEventListener('click' , function(e){
    let a = inp1.value;
    let b = inp2.value;
    let c = dropdown.value;
  
    if(c == 1){
        let layout = `<tr>
        <td>${no++}</td>
        <td>${a}</td>
        <td>${b}</td>
        </tr>`
        INtable.insertAdjacentHTML('beforeend' , layout);
        total = parseInt(total) + parseInt(a);
        head5.innerHTML = `Total Income : ${parseInt(total)}`;
   saving.innerText = parseInt(total) - parseInt(totalExpense) 
             
    }


    else if(c==2){
        let layout = `<tr>
        <td>${noExpense++}</td>
        <td>${a}</td>
        <td>${b}</td>
        </tr>`
        EXtable.insertAdjacentHTML('beforeend' , layout);
        totalExpense = parseInt(totalExpense) + parseInt(a)
        head6.innerText = `Total Expense: ${totalExpense}`
   saving.innerText = parseInt(total) - parseInt(totalExpense) 
   
            }
            
            let SavingMsg = saving.innerText;
            console.log(SavingMsg);

             
            inp1.value = '';
            inp2.value = '';
            dropdown.value = 0;   
})
