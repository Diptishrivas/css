function fillcities()
{
    switch(State.selectedIndex)
    {
        case 1:
            var mpcity=["-cities-","Gwalior","Bhind","Morena","Bhopal","Indore"]
            fillDropdown(mpcity)
            break;
            case 2:
                var upcity=["-cities-","jhansi","sultanpur","Lucknow","Rampur","Mau"]
                fillDropdown(upcity)
                break;
            case 3:
                var ascity=["-cities-","dhubri","Nagaon","Guwahati","Diphu","Hojai","sonari"]
                fillDropdown(ascity)
                break;

            case 4:
                var gcity=["-cities-","surat","ahemdabaad","vadora","rajkot","jaam nagar"]
                fillDropdown(gcity)
                break;
            case 5:
                var bcity=["-cities-","patna","musfarpur","gaya","hajipur"]
                fillDropdown(bcity)
                break;
    }
    function fillDropdown(cityarray)
    {
        removeElement()
        for(i=0;i<cityarray.length;i++)
        {
            var opt=document.createElement('option')
            opt.text=cityarray[i]
            cities.add(opt)
        }
    }
 
    
}

