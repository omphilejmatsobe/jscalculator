var screenDisplay = document.querySelector('#screen'); //Var  for screen element
var calcBtn = document.querySelectorAll('.calc_btn'); //Var for all button elements

for (item of calcBtn)
{
    item.addEventListener('click', 
        (e) => {
            btnContent = e.target.innerText; //Text contained inside the button element

            if (btnContent === 'x')
            {
                btnContent = '*';
            }
            else if (btnContent === '÷')
            {
                btnContent = '/';
            }

            screenDisplay.value += btnContent;
        }
    )
}

const factorial = () =>
{
    var i, fact;

    fact = 1;

    for(i = screenDisplay.value; i > 0; i--)
    {
        fact *= i;
    }

    screenDisplay.value = fact;
}

const equalFunc = () =>
{
    let numArray = [];
    let opArr = [];
    var result;

    if (!Number.isInteger(Number(screenDisplay.value[0]))
        &&
        !Number.isInteger(Number(screenDisplay.value[screenDisplay.value.length - 1]))
        && (screenDisplay.value[screenDisplay.value.length - 1] != ')')
    )
    {
        errorFunc();
    }

    var x = 0;
    var idx = 0;
    var val = 0;
    var opArrIdx = 0;

    for (var i = 0; i < screenDisplay.value.length; i++)
    {
        if (!Number.isInteger(Number(screenDisplay.value[i])))
        {
            if (screenDisplay.value[i] != "("
                || 
                screenDisplay.value[i] != ")"
            )
            {
                opArr[opArrIdx] = screenDisplay.value[i];
            }

            if (!Number.isInteger(Number(screenDisplay.value[i+1]))) errorFunc();
            idx++;
            val = 0;
        }
        else
        {
            val *= 10;
            val += Number(screenDisplay.value[i]);
        }
        numArray[idx] = val;
    }

    var result = numArray[0];
    for (var i = 0; i < numArray.length - 1; i++)
    {
        console.log(numArray[i]);
        if (opArr[i] == '+') result = numArray[i] + numArray[i + 1];
        if (opArr[i] == 'x') result = numArray[i] * numArray[i + 1];
        if (opArr[i] == '/') result = numArray[i] / numArray[i + 1];
        if (opArr[i] == '-') result = numArray[i] - numArray[i + 1];

        numArray[i + 1] = result;
    }

    screenDisplay.value = result;
}

const errorFunc = () =>
{
    var oldVal = screenDisplay.value;
    screenDisplay.value = "Error";

    setTimeout(() => {
        screenDisplay.value = oldVal;
    }, 2000);
    return;
}

//Trig Functions
const sinFunc = () => screenDisplay.value = Math.sin(screenDisplay.value);
const cosFunc = () => screenDisplay.value = Math.cos(screenDisplay.value);
const tanFunc = () => screenDisplay.value = Math.tan(screenDisplay.value);
const sqFunc = () => screenDisplay.value = Math.pow(screenDisplay.value, 2);
const sqrtFunc = () => screenDisplay.value = Math.sqrt(screenDisplay.value, 2);
const piFunc = () => screenDisplay.value = Math.sin(screenDisplay.value);

// Removes the last character of the value on the screen
const removeCont = () => screenDisplay.value = screenDisplay.value.substr(0, screenDisplay.value.length-1);  