function call()
{
    var y=pswd.value
    var z=cpswd.value
    if(y==z)
    {
        result.innerHTML="<img src='right.png' width='20'>"
    }
    else
    {
        result.innerHTML="<img src='wrong.png' width='20'>"
    }

}