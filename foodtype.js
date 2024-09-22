function fillfood()
{
    switch(item.selectedIndex)
    {
        case 1:
                var vegf=[["-menu-",0],["pannerchaap",160],["kabbab",120],["vegbriyan",90],["cholebhature",100]]
               fillDropdown(vegf)
            break;
        case 2:   
                 var nvegf=[["-menu-",0],["matan",220],["chicken",180],["eggcurry",150],["fishcurry",190]]
                 fillDropdown(nvegf)
            break;
    }
}
        function fillDropdown(varity)
        {
            removeElement()

            for(i=0;i<varity.length;i++)
            {
                var ppt=document.createElement('option')
                 ppt.text=varity[i][0]
                 ppt.value=varity[i][1]
                 menu.add(ppt)
            
            }
        }
            function removeElement()
            {
               for(j=menu.options.length-1;j>=0;j--)
               {
                menu.remove(j)
               }
            }

        
        function vp()
        {
            var name=menu.options[menu.selectedIndex].text
            var pqr="<table border='1' cellspacing='2' cellpadding='50'>"
            pqr+="<caption><h2>Food item</h2></caption>"
            pqr+="<tr><th><h3>"+name+"</h3></th></tr>"
            pqr+="<tr><th><img src='"+name+".png'></th></tr>"
            pqr+="<tr><th><h3>"+menu.value+"</h3></th></tr></table>"
            imgs.innerHTML=pqr
            
    
         }
        
    