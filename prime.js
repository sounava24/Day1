for (let index = 1; index < 101; index++) {
    var c=0;
    for (let index1 = 1; index1 <= index; index1++) {
        if(index%index1==0)
        c++;
    }
    if(c==2)
    console.log(index);
c=0;
    
}