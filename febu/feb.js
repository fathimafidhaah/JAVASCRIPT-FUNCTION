function fibo(a) {
    var n1=0,n2=1,n3
    for(i=0;i<=a;i++){
        console.log(n1);
        n3=n1+n2
        n1=n2
        n2=n3
    }
}
fibo(7)
