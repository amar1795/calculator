let screen=document.getElementById('display');
let buttons=document.querySelectorAll('button');
let screenvalue="";

for(item of buttons)
{
    item.addEventListener('click',(e)=>{
    {
        buttonText=e.target.innerText;
    }

    if(buttonText=="X")
    {
        buttonText=("*")
         screenvalue+=buttonText;
         screen.value=screenvalue;

    }
    else if(buttonText=="AC")
    {
        
         screenvalue="";
         screen.value=screenvalue;

    }
    else if(buttonText=="=")
    {
       
         screen.value=eval(screenvalue);

    }
    else 
    {
        
         screenvalue+=buttonText;
         screen.value=screenvalue;

    }
});
}




let element=document.createElement('h1');
// element.className='childdul';
// element.id='createdli';

let text=document.createTextNode('Code with harry');
element.appendChild(text);




