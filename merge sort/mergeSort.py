def merge (arr1,arr2):
    i=0
    j=0
    result=[]
    while i<len(arr1) and j<len(arr2):
        if arr1[i]<arr2[j]:
            result.append(arr1[i])
            i+=1
        else:
            result.append(arr2[j]) 
            j+=1           
    while i<len(arr1):
          result.append(arr1[i])
          i+=1
    while j<len(arr2):
          result.append(arr2[j]) 
          j+=1  

    return result

# print(merge([0,1,2,88],[4,6,98,99]))          


def mergeSort(arr):
    if len(arr)<=1:
        return arr
    mid = int(len(arr)/2)
    left = mergeSort(arr[:mid]) 
    right = mergeSort(arr[mid:])
    return merge(left,right)


print(mergeSort([98,54,30,2,1,5,6,7,0]))