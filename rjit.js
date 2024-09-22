function fillname()
{
    switch(list.selectedIndex)
    {
        case 1:
            
        var mvr=["-list-","aman","priya","ankita","adarsh","Ekam","sandhya","veer","phuskar","Dipti","Abhishek"]
        fillDropdown(mvr)
        break;

        case 2:
        
        var itr=["-list-","anjali","nhishi","souryam","meetghei","rahul","ajay","Ram","ayush","prince","dolly"]
        fillDropdown(itr)
        break;

        case 3:

        var ect=["-list-","Riya","Gaurav","Saksham","Rihan","Isha","sumit","devesh","sujal","shyam","Raj"]
        fillDropdown(ect)
        break;

    }
    function fillDropdown(listarray)
    {
        removeElement()        
        for(i=0;i<listarray.length;i++)
        {
            var rtp=document.createElement('option')
             rtp.text=listarray[i]
             call.add(rtp)
        }

    }
    function removeElement()
    {
        for(j=call.options.length-1;j>=0;j--)
        {
         call.remove(j)
        }
    }
}