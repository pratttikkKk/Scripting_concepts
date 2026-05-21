class EvenOdd{

result(){
for(let i=1; i<=20; i++){
if(i%2==0){
console.log(i," is Even");
}
else{
console.log(i," is Odd");
}
}
}
}

let c = new EvenOdd();
c.result();