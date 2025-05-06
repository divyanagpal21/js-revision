const form = document.querySelector('form')

form.addEventListener('submit',(e)=>{

    e.preventDefault();

    const height=parseInt(document.querySelector('#height').value);
    const weight=parseInt(document.querySelector('#weight').value);
    const results=document.querySelector('#results');

    if(height ==' ' || height < 0 || isNaN(height)){
        results.innerHTML='Please give a valid height'
    }
    else if(weight ==' ' || weight < 0 || isNaN(weight)){
        results.innerHTML='Please give a valid weight'
    }
    else{
        const bmi=(weight/((height*height)/10000)).toFixed(2)
        results.innerHTML=`<span>${bmi}</span>`;
        const curr_bmi=document.querySelector('#bmi-results');

        if(bmi< 18.5){
            curr_bmi.innerHTML='You are underweight'
        }
        else if(bmi>=18.5&& bmi<=25){
            curr_bmi.innerHTML='Your weight is in normal range'
        }
        else{
            curr_bmi.innerHTML='You are overweight'
        }
    }
})