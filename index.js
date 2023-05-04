i = 20;
result = '';

while (i <= 30) {
    result += i + ' ';
    i += 0.5;
}
console.log(result);

dollar = 27;
hryvniya = 10;

while (hryvniya <= 100) {
    console.log(`${hryvniya} hryvnias = ${hryvniya * dollar} dollars`);
    hryvniya += 10;
}

evenNumber = parseInt(prompt('Enter an even number'));
i = 1;

while (i <= 100) {
    if (Math.pow(i, 2) < evenNumber) {
        console.log(i);
    }
    i++;
}

i = 1;
isSimple = 0;

while (i <= evenNumber) {
    if (evenNumber % i === 0) {
        isSimple++;
    }
    i++;
}

if (isSimple > 2) {
    console.log(`Number ${evenNumber} is not a simple number`);
} else {
    console.log(`Number ${evenNumber} is a simple number`);
}

i = 0;
isExponentiationByThree = false;

while (i < evenNumber) {
    if (Math.pow(3, i) === evenNumber) {
        isExponentiationByThree = true;
    }
    i++;
}

if (isExponentiationByThree) {
    console.log(`${evenNumber} can be exponentiated by 3`);
} else {
    console.log(`${evenNumber} can\'t be exponentiated by 3`);
}