let animals_even = ["Dog", "Cat", "Spider"]; // pair
let animals_odd = ["bat", "Snake", "Bear"]; // impair

for (let i = 0; i < animals_even.length; i++)
{
    if(i % 2 === 0)
    {
        console.log(animals_even[i])
    }
}

for(let i = 0; i < animals_odd.length; i++)
{
    if(i %2 !== 0)
    {
        console.log(animals_odd[i])
    }
}