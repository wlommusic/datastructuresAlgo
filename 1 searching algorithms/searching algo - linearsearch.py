def linear (arr,val):
  for i in range(len(arr)):
    if arr[i] == val:
      return i
  return -1  
print(linear([0,1,2,3,4],3) )     
