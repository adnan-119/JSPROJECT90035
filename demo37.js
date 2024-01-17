let n= parseInt(prompt("Enter a number: "),0)
//amstrong number
let sum=0
let digit=0
let temp=n
while(n!=0){
    digit=n%10
    sum=sum+Math.pow(digit,3)
    n=n/10
}
if(sum==temp){
    document.writeln(`${temp} Amstrong number`)
}
else{
    document.writeln(`${temp} not an Amstrong number`)
}