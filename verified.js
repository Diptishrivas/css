function verify()
{
    var i=pswd.value
    var j=cpswd.value
     
    if(i==j)
    {
        result.innerHTML="<font color='green'> verified<img src='right.png' width='20'>"
    }
    else{
        result.innerHTML="<font color='red'> notverified<img src='wrong.png' width='20'>"
    }
}