//room expenditure
rent = 2360;
curtain = 200;
rubbers = 250;
bedSpreadAndPillow = 200;
rentTotal = rent + curtain + rubbers + bedSpreadAndPillow;



//loans
jonas = 100;
agare = 000;
fido = 250;
john = 50;

loansTotal = jonas + agare + fido + john;

//mumSupport
amount = 250;
mumTotal = amount;

//self
self = 500;
transport = 150;
selfTotal = self + transport;

paid = jonas + mumTotal + 1800
total = rentTotal + loansTotal + mumTotal + selfTotal;

console.log("rent: %d", rentTotal)
console.log("loans:", loansTotal);
console.log("mum:", mumTotal);
console.log("self:", selfTotal);



console.log("Total: %d\nBalance: %d", total, 4167 - total + paid);

