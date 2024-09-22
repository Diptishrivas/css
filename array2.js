function fillfood()
{
     switch(menu.selectedIndex)
     {
        case 1:
        var nonveg=["-nonveg-","chicken","mutton","kabbab","biryani","fishcurry"]
        for(i=0;i<nonveg.length;i++)
        {
            var opt=document.createElement('option')
            opt.text=nonveg[i]
            Items.add(opt)
        }
        case 2:
           
        var veg=["-veg-","pulav","pannerkoffte","shahipanner","Rayta","makhnidal"]
        for(i=0;i<veg.length;i++)
        {
        
            var ppt=document.createElement('option')
            ppt.text=veg[i]
            Items.add(ppt)
        }
        case 3:
            
                var italia=["-italia-","Pizza","Pasta","Arancini","Lasagna","Risotto"]
                for(i=0;i<italia.length;i++)
        
            {
                var pts=doucument.createElement('option')
                pts.text=italia[i]
                Items.add(pts)
            }
            case 4:

                var southern=["-southern-","idlisambhar","dosachees","uttapam","vada","pongal"]
                for(i=0;i<southern.length;i++)
                {
                    var lmo=document.createElement('option')
                    lmo.text=southern[i]
                    southern.add(lmo)
                }
            case 5:
                
                var span=["-span-","pisto","fabada","paella","jamon","churros"]
                for(i=0;i<span.length;i++)
                {
                    var gsk=document.createElement('option')
                    gsk.text=span[i]
                    items. add (gsk)
                }
     }
}