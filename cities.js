function fillstates()
{
    switch(Country.selectedIndex)
    {
        case 1:
            var ind=["-list-","Gujrat","Assam","Madhyapradesh","punjab","GOA","Bihar","Mizoram"]
            fillDropdown(ind)
            break;

         case 2:
            var jap=["-list-","tohoku","kanto","chubu","shikoku","kansai","kyushu&Okinawa"]   
            fillDropdown(jap)
            break;
    }
    
    function fillDropdown(listarray)
    {
         removeElement()
         for(i=0;i<listarray.length;i++)
         {
           var ppt=document.createElement('option')
            ppt.text=listarray[i]
            State.add(ppt)
         }
    }
        function removeElement()
        {
            for(j=State.options.length-1;j>=0;j--)
            {
            State.remove[j]
            }
        }
    }
