function call()
{
    var r=parseInt(rent.value)
    var k=km.value
    var t=bustype.value
    var na="";
    if(t=="AC")
    {
        na=k*(r+4)
    }
    else if(t=="volvo")
    {
        na=k*(r+7)
    
    }
    else{
        na=k*r
    }
    amount.innerHTML="<h1> Amount:"+na+"</h1>"

    
}