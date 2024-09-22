function call()
{
    var a=pswd.value
    var b=cpswd.value
    if(a==b)
    {
        result.innerHTML="<font color='green'>Matched</font>"
    }
    else
    {
        result.innerHTML="<font color='red'>NOT matched</font>"
    }
}