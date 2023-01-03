let num=13;
let a;
for(a=2;a<num;a++)
  {
    if(num%a==0)
    {
       break;
    }
  }
   if(num==a)
   {
     console.log("Yes");
   }
else{
  console.log("No");
}
