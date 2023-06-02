let ages = [2,4,5,6,8,9,12,54,100];

let first = 0;
let last = ages.length - 1;
let target = 4;

while(first <= last)
{
    let middle = Math.floor((first + last) / 2);

    if (ages[middle] == target)
    {
        console.log("Target found");
        break;
    }

    else if (ages[middle] > target)
    {
        last = middle - 1;
    }

    else if (ages[middle] < target)
    {
        first = middle + 1;
    }
}