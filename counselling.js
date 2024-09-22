function call2()
{
       for(i=1;i<branch.options.length;i++)
        {
            var rdm=document.createElement('option')
            rdm.text=branch.options[i].text
            choice.add(rdm)
        }
//remove2()
}
function call4()
{
    for(i=1;i<choice.options.length;i++)
        {
            var rdm4=document.createElement('option')
            rdm4.text=choice.options[i].text
            branch.add(rdm4)
        
        }
}
function removeElement()
{
    for(j=choice.option.length-1;j--)
        {
            choice.remove[j]
        }
}

function call1()
{
       var rdm1=document.createElement('option')
       rdm1.text=branch.options[branch.selectedIndex].text
       choice.add(rdm1)
       branch.remove(branch.selectedIndex)
}
function call3()
{
    var rdm3=document.createElement('option')
    rdm3.text=choice.options[choice.selectedIndex].text
    branch.add(rdm3)
    choice.remove(choice.selectedIndex)
}

