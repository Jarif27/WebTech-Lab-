console.log("connected");

function pressKey(value) 
{
    const display = document.getElementById('display');

    if (value == 'C') 
        {
        display.innerText = '';
    } 
    else if (value == '=') 
        {
         try 
         {
            if (display.innerText.trim() !== '') {
                display.innerText = eval(display.innerText);
            }
         } 
         catch 
         {
            display.innerText = "Error";
         }
    }
    else 
    {
        display.innerText += value;
    }
}


function getDisplay() 
{
    const display = document.getElementById('display');
    console.log(display.innerText);
}