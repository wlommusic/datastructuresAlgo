function naiveSearch(long, short){
    var count = 0;
    for(var i = 0; i < long.length; i++){
        for(var j = 0; j < short.length; j++){
           if(short[j] !== long[i+j]) break;
           if(j === short.length - 1) count++;
        }
    }
    return count;
}

naiveSearch("Redmi Note 9 Pro (Interstellar Black, 4GB RAM, 64GB Storage)- Latest 8nm Snapdragon 720G & Alexa Hands-Free Capabled", "redmi")
