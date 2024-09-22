function rrr()
{
    var rps=parseInt(rp.value)
    var chs=parseInt(ch.value)
    var inclu=rps*chs
    if(rp=="2")
    {
        var dp=dps.innerHTML
        dp++
        dps.innerHTML=dp
    }
    else
    {
        dps.innerHTML=`sorry only two person are allow`
    }
    var rupe="price: without breakfast:-$ 4000"
    aa.innerHTML=rupe
    bb.src="room1.png"
    var rupee="price:Included Breakfast:"
    cc.innerHTML=`${rupee} ${inclu}`
    ab.innerHTML="Break fast Name:sandwich+eggroll"

    ac.src="breakfast1.png"

}
function sss()
{
    var trp=parseInt(rp.value)
    var prt=parseInt(ch.value)
    var inclue=trp*prt
    if(rp=="2")
        {
            var ds=dps.innerHTML
            ds++
            dps.innerHTML=ds
        }
        else
        {
             dps.innerHTML=`sorry only 2 persons are allow`
        }
        var rupes="price: without breakfast:-$ 2500"
        aa.innerHTML=rupes
        bb.src="room2.jpg"
        var rupess="price:Include Breakfast:"
        cc.innerHTML=`${rupess} ${inclue}`
        ab.innerHTML="Break fast Name:dosa"

        ac.innerHTML="breakfast2.png"
}
function ppp()
{
    var atr=parseInt(rp.value)
    var ats=parseInt(ch.value)
    inclued=atr*ats
    if(rp=="2")
        {
            var rd=dps.innerHTML
            rd++
            dps.innerHTML=rd
        }
        else{
            dps.innerHTML=`sorry only 2  person allow`
        }
        var rupess="price: without breakfast:-$ 1500"
        aa.innerHTML=rupess
        bb.src="room3.jpg"
        var rupesss="price:Include Breakfast:"
        cc.innerHTML=`${rupesss} ${inclued}`
        ab.innerHTML="Breakfast name:iddli"
        
        ac.src="breakfast3.png"
}