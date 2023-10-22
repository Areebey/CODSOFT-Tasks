// Here We Can COde for making a simple calculator App

function appendToDisplay(value){
const display=document.getElementById('display');
 display.value+=value;
}

function clearDisplay(value){
const display=document.getElementById('display');
 display.value ='';
}

function calculate(){
    const display=document.getElementById('display')
    try{
        display.value=eval(display.value);
    }catch(error){
        display.value='Error';
    }
}


 const buttons=document.querySelectorAll('button');

 buttons.forEach((button)=>{
 button.addEventListener('click',()=>{

    if(button.textContent==='Clear'){
        clearDisplay();
    }
    else if(button.textContent==='='){
        calculate();
    }else{
        appendToDisplay(button.textContent);
    }
 })
})