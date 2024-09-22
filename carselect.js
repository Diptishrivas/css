function fillcar()
{
    switch(list.selectedIndex)
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

}
        function fillDropdown(listarray)
        {
         removeElement()

       for(i=0;i<listarray.length;i++)
        {

         var scc=document.createElement('option')
         scc.text=listarray[i]
         lists.add(scc)
  }
}
  