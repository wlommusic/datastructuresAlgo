fucntion binary(arr,val){
let start =0
let end = arr.length -1
let middle = math.floor(start+end/2)
while(arr[middle] !== val && start<=end){
  if(val<arr[middle])end = middle-1;
  else start = middle +1;
  middle = math.floor(start+end/2)
}
  return arr[middle] === val ? middle : -1;

}
