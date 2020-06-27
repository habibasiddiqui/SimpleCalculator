
function getBtn(btn)
{
    // console.log(btn);
    var result = document.getElementById("outputBox");
    if (result.value == null || result.value == '0' || result.value == "")
        result.value = btn;
    else
        result.value += btn;
}

function getOutput()
{
    var result = document.getElementById("outputBox");
    result.value = eval(result.value);

}

function clearBox()
{
    var result = document.getElementById("outputBox");
    result.value = "0";
    
}

function del()
{
    var result = document.getElementById("outputBox").value;
    document.getElementById("outputBox").value= result.slice(0, -1);
}

function signChange() 
{
    var result = document.getElementById("outputBox");
	if(result.value.substring(0, 1) == "-")
		result.value = result.value.substring(1, result.value.length)
	else
		result.value = "-" + result.value;
}

function getRcpr()
{
    var result = document.getElementById("outputBox");
    result.value = 1 / (result.value);
}

function getSqrRt()
{
    var result = document.getElementById("outputBox");
    result.value = Math.sqrt(result.value);
}

function getSqr()
{
    var result = document.getElementById("outputBox");
    result.value = Math.pow(result.value, 2);
}