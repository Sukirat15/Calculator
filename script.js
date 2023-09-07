
var screen=document.getElementById('screen');
buttons=document.querySelectorAll('button');

var screenValue="";

for(var i=0;i<buttons.length;i++)
{
    buttons[i].addEventListener('click',function(){

    
        var value=this.getAttribute('data-value');
       
         
        if(value=='X')
        {   
            value='*';
            screenValue+=value;
            screen.value=screenValue;
        }

        else if(value=='C')
        {
            screenValue="";
            screen.value=screenValue;
        }

        else if(value=='=')
        {   
            try
            {
            screen.value=eval(screenValue);
            }

            catch(error){
                screen.value='Error';
            }

        }
        else
        {
            screenValue+=value;
            screen.value=screenValue;
        }


       
    });
}
