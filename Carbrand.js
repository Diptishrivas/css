function fillbrand()
{
    switch(brand.selectedIndex)
    {
        case 1:

        var hyn=["-list-","hyundaii20","creta","venue","Alcazar","verna","santro"]
        fillDropdown(hyn)
        break;
        
        case 2:
          
        var mhn=["-list-","scorpio","XUV300","Bolero","Marazzo","Thar","XUV700"]
        fillDropdown(mhn)
        break;

        case 3:

            var szu=["-list-","Baleno","Dezire","Swift","WagonR","Brezza","Celerio"]
            fillDropdown(szu)
            break;
    }
  
    
      function fillDropdown(listarray)
      {
        removeElement()

// alert(listarray)
        // alert(removeElement)
        for(i=0;i<listarray.length;i++)
        {

          // console.log(removeElement,"xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx")
            var rpc=document.createElement('option')
            rpc.text=listarray[i]
            lists.add(rpc)
        }
        
      }
     
     
  }
    
  function removeElement(hyn)
  {
      for(j=lists.options.length-1;j>=0;j--)
      {
     lists.remove[j]
      }
  }
        function fb()
        {
            var name=list.options[list.selectedIndex].text
            var pqr="<table border='1' cellspacing='2' cellpadding='50'>"
            pqr+="<caption><h2>New branded car</h2></caption>"
            pqr+="<tr><th><h3>"+name+"</h3></th></tr>"
            pqr+="<tr><th><img src='"+name+".png'></th></tr>"
            pqr+="<tr><th><h3>"+list.value+"</h3></th></tr></table>"
            amount.innerHTML=pqr
      
        }


