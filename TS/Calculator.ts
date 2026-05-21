class calculator{

add(a:number,b:number){
return a+b;
}

Sub(a:number,b:number){
return a-b;
}

Mul(a:number,b:number){
return a*b;
}

Div(a:number,b:number){
return a/b;
}

}

let c = new calculator();
console.log(c.add(10,20));
console.log(c.Sub(10,20));
console.log(c.Mul(10,20));
console.log(c.Div(10,20));