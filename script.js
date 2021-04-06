function demo() {
    var num=document.getElementById("number").value;
    var i,j, isPrime=0, store=0;
    for ( i=2; i<=num; i++) {
        isPrime=1;
        for (j = 2; j<=i/2; j++){
            if(i%j==0) {
                isPrime=0;
                break;
            }
        }
    if(isPrime==1) {
        store=store+i;
        document.write(i+ " ");
    }
    }
    document.write("<br>" + "sum of prime numbers: " + store );
}