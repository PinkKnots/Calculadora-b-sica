function insert(num)
{
    var number = document.getElementById('result').innerHTML;
    document.getElementById('result').innerHTML = number + num;
}

function clean()
{
    document.getElementById('result').innerHTML = "";
}

function calculate()
{
    var result = document.getElementById('result').innerHTML;
    if(result)
    {
        document.getElementById('result').innerHTML = eval(result);
    }
}