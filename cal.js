function getHistory(){
    return document.getElementById('history-value').innerHTML;
}
function printHistory(num){
    document.getElementById('history-value').innerHTML=num;
}
function getOutput(){
   return document.getElementById('output-value').innerHTML=num;
}
function printOutput(num){
    //if the outpu is empty, return nothing
    if (num===""){
        document.getElementById('output-value').innerHTML = num; 
    }
    else{
        document.getElementById('output-value').innerHTML=formattedNum(num);
    }
}
    //to format the number i.e 2222222=222,222
function formattedNum(num){
    let n= Number(num);
    let value=n.toLocaleString('en');
    return value;
}
//to manipulate the string to a proper number
let reverseNumberFormat=(num)=>{
    return Number(num.replace(/,/g, ''));
}
//operator 
let operator =document.getElementsByClassName('operator')
// to access the operators
for(let i=0; i<operator.length; i++){
    //add an event listener to all of them
    operator[i].addEventListener('click', ()=>{
        //the action to be performed with the use of click event
        
    })
}
//numbers
var number = document.getElementsByClassName("number");
for(var i =0;i<number.length;i++){
	number[i].addEventListener('click',function(){
		var output=reverseNumberFormat(getOutput());
		if(output!=NaN){ //if output is a number
			output=output + this.id;
			printOutput(output);
		}
	});
}