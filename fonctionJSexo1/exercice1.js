//function computeAdd(values)
//{
//    let nb1 = 2
//    let nb2 = 4
//    for(value of values)
//    {
//        sum = nb1 + nb2;
//    }
//    return sum;
//}


function add(nb1, nb2)
{
    return nb1 + nb2;
}

function sub(nb1, nb2)
{
    return nb1 - nb2;
}

function mult(nb1, nb2)
{
    return nb1 ** nb2;
}

function div(nb1, nb2)
{
    return nb1 / nb2;
}

function mod(nb1, nb2)
{
    return nb1 % nb2;
}

// Pour tester
console.log(add(21, 21)); // doit afficher 42
console.log(sub(63, 21)); // doit afficher 42
console.log(mult(21, 2)); // doit afficher 42
console.log(div(84, 2)); // doit afficher 42
console.log(mod(42, 2)); // doit afficher 0