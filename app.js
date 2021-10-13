function check(){
    var count=0
    var res;
    var result=document.getElementById('result')
    var number =Number(document.getElementById('number').value)
    
    for (let i=2;i<=number;i++){
        if(number%i==0){
            count++;
        }
        if(count>1){
            res="The given number is not prime"
            document.body.style.background="green"
            break
        }
        res="The given number is prime"
        document.body.style.background="red"
    }
    result.innerHTML=res
}