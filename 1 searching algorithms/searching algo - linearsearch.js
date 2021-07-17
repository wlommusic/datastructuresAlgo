function linear(arr,val){
    for (i =0;i<arr.length;i++){
        if(arr[i]==val){
            return i
        }
    }return -1
}

linear([0,1,3,4,5],4)
