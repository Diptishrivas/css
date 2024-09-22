function fillcities()
{
    switch(states.selectedIndex)
    {
        case 1:
    var mpcities=["-cities-","Gwalior","Bhind","Morena","Bhopal","Indore"]
    for(i=0;i<mpcities.length;i++)
    {
    
      var opt=document.createElement('option')
      opt.text=mpcities[i]
      city.add(opt)
    }
    case 2:

      var upcities=["-cities-","jhansi","sultanpur","Lucknow","Rampur","Mau"]
      for(i=0;i<upcities;i++)
      {
        var rst=document.createElement('option')
        rst.text=upcities[i]
        city.add(rst)
      }
      case 3:
         
      var ascities=["-cities-","dhubri","Nagaon","Guwahati","Diphu","Hojai","sonari"]
      for(i=0;i<ascities;i++)
      {
        vpn=document.createElement('option')
        vpn.text=ascities[i]
        city.add[vpn]
      }
      case 4:

      var gcities=["-cities-","patan","rajkot","jamnagar","valsad","surat"]
      for(i=0;i<gcities;i++)
      {
        mdn=document.createElement('option')
        vpn.text=gcities[i]
        city.add[mdn]

      }
    }
}
