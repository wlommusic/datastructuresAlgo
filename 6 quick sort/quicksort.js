function pivot(arr,start=0,end=arr.length-1){
    const swap=(arr,idx1,idx2)=>{
           [arr[idx1],arr[idx2]]=[arr[idx2],arr[idx1]]
       };
    let pivot = arr[start];
    let swapindx = start;
   
    for (let i=start+1;i<=end;i++){
        if(arr[i]<pivot){
            swapindx++   
            swap(arr,swapindx,i)
            
        }     
    }   
    swap(arr,start,swapindx)
     return swapindx;
   }
   
// pivot([4,8,2,1,5,7,6,3])
   
function quickSort(arr,left=0,right=arr.length-1){
    if(left<right) {
    let pivotindx = pivot(arr,left,right)
    quickSort(arr,left,pivotindx-1);
    quickSort(arr,pivotindx+1,right)
 }
 return arr;
}   

quickSort([4,8,2,1,3,5,0])
