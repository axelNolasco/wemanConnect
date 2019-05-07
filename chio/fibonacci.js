function fibonacci(pos){
  console.log(pos)
  if(pos < 2){
    return 1;
  }
  else{
   return fibonacci(pos-1) + fibonacci(pos-2);
  }
}

fibonacci(5);