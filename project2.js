document.querySelector('#bmi').addEventListener('submit',function(e){
    e.preventDefault();
   
    const weight=parseFloat(document.querySelector('#kg').value);
    const height=parseFloat(document.querySelector('#metre').value);
    const result=document.querySelector('#result');
    if(!isNaN(weight) && !isNaN(height) && weight>0 && height>0){
    const bmi=weight/(height*height);
result.innerHTML=`"Your BMI is ${bmi.toFixed(2)}"`;
    }if(isNaN(weight) && isNaN(height)){
        alert('provide number');
    }
    
    
    
})