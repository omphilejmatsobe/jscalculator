

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

var equalFunc = () => {
    s = screenDisplay.value;

    let num = '';
    let prevOperator = '+';
    const stack = [];
    
    for (let i = 0; i <= s.length; i++) {
        const ch = s[i];
        
        if (ch >= '0' && ch <= '9') {
            num += ch;
        }
        
        if ((ch < '0' || ch > '9') && ch !== ' ' || i === s.length) {
            if (prevOperator === '+') stack.push(Number(num));
            if (prevOperator === '-') stack.push(-Number(num));
            if (prevOperator === '*') stack.push(stack.pop() * Number(num));
            if (prevOperator === '/') stack.push(Math.trunc(stack.pop() / Number(num)));
            
            prevOperator = ch;
            num = '';
        }
    }

    var res = stack.reduce((total, cur) => total + cur, 0); 
    screenDisplay.value = res.toString();
    return res;
};

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