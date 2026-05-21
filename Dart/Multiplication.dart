class Calculation{
  
  void Multiplication(){
  
   int n=5;int ans= 1;
    
  for(int i=1; i<=10;  i++){
    ans= i*n;
    print("$n * $i == $ans");
  }
  
}
}

void main(){
Calculation c = Calculation();
  c.Multiplication();
}