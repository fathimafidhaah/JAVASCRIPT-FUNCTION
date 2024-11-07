

function palindrom(a){
var b=""


for(i=a.length-1;i>=0;i--){
    b=b+a[i]
}
if(a==b){
    console.log("it is a palindrom");
    
}else{console.log("it is not a palindrom");
}
}
palindrom("malayalam")
