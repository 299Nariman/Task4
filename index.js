//--1ci sual
let cost =0;
for(let a=1; a<=100; a++){
    cost+=a;
}
console.log(cost);

//--2ci sual
let numbers=[1,2,3,4,5]
for (let a=0; a < numbers.length; a++) {
    console.log(numbers[a])
}

//--3cu sual


let insan={
    ad:'Ali',
    yaş:25,
    şəhər:'Bakı'
}
console.log(insan.ad);
console.log(insan.yaş);
console.log(insan.şəhər);

//---4cu sual
let book = { kitab: "1984", müəllif: "George Orwell" };
for (let key in book) {
    console.log(key + ": " + book[key]);
}

//--5ci sual
let fruit=['apple','banana','orange']
for(let a=0; a<fruit.length; a++){
    console.log(fruit[a])
}

//--6ci sual
let string='Salam'
for(let a=0;a<string.length; a++){
    console.log(string[a])
}

//--7ci sual


for (let a=1; a<=10; a++){
    console.log(a)
}

//--8ci sual


let ededler=[5,10,15,20];
let eded=0;
do{
    console.log(ededler[eded]);
    eded++;
}
while(eded<ededler.length)

//-9cu sual
let a=1;
do{
    console.log(a);
    a++;
}
while(a<=5);

//--10cu sual
let number;
do{
    number=parseInt(prompt());
}
while(number<50);
console.log( +number)
