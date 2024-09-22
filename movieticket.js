function call()
{
      switch(ss.selectedIndex)
      {
        case 1:
            var bolly=[["movies",0],["anek",100],["nayak",200],["prem",300],["dhamaal",400],["junooniyat",500]]
            fillDropdown(bolly)
            break;
            case 2:
            var holly=[["web-series",100],["Dark",200],["ozaks",300],["conjuring",500],["thirteenGhost",600]]
            fillDropdown(holly)
            break;
            

      }
}
  function fillDropdown(moviearray)
  {
    removeElements()
    for(i=0;i<moviearray.length;i++)
        {
            var dee=document.createElement('option')
            dee.text=moviearray[i][0]
            dee.value=moviearray[i][1]
            bm.add(dee)
        }
    
  }
  function removeElements()
  {
    for(j=bm.options.length-1;j>=0;j--)
        {
            bm.remove(j)
        }
        
  }
  function soul()
  {
    var aa=bm.options[bm.selectedIndex].text
    var bb=mtt.value
    var cc=mt.value
    var tt=bm.value

    var price=cc*tt

    if(tt>5 && tt<10)
        {
            var dep='pepsi.jpg'
        }
        else if(tt>=10)
            {
                dep='cockpop.jpg'
            }
            else{
                dep='sadlife.jpg'
            }
  
      var home=`<table bgcolor="pink" border='1' cellspacing="10" cellpadding="10">
      <caption><b>MOVIE DETAILS</b></caption>
      <tr><th>MOVIE NAME <font color='pink'>${aa}</font></th></tr><tr><th><h3>MOVIE TIME-<font color='blue'${bb}</font></h3></th></tr>
      <tr><th><img src='${aa}.jpg' width='300'</th></tr>
      <tr><th>TICKET PRICE : <font color='green'>${tt}</font></th></tr>
      <tr><th>TOTAL PAYMENT :<font color='yellow'>${price}</font></th></tr>
      <tr><th><img src='${dep}' width="70"></th><tr><table>`

      bt.innerHTML=home

        }
