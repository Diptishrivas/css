 function soul()
 {
    var theorytotal=parseInt(p.value)+parseInt(c.value)+parseInt(m.value)
    var practicalmarks=parseInt(pp.value)+parseInt(pc.value)+parseInt(pm.value)
    var grandtotal=theorytotal+practicalmarks
    var percentage=(grandtotal/500)*100
    var division=""
    if(percentage>=60 && percentage<=100)
    {
        division="first"
    }
    else if(percentage>=45 && percentage<=59)
    {
        division="second"
    }
    else if(percentage>=35 && percentage<=44)
    {
        division="fail"
    }
     var msg="<div><b>Total :</b>"+theorytotal+"</div>"
     msg+="<div><b>total practical:</b>"+practicalmarks+"</div>"
     msg+="<div><b>grand total : </b>"+grandtotal+"</div>"
     msg+="<div><b>percentage:</b>"+percentage+"/div>"
     msg+="<div><b>result :</b>"+division+"</div>"

     result.innerHTML=msg


 }