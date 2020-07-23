//https://www.codewars.com/kata/520446778469526ec0000001/train/javascript

Array.prototype.sameStructureAs = function (other) {
  const array1Queue = [this];
  const array2Queue = [other];  
  
  while(array1Queue.length) {
    const array1QueueItem = array1Queue[array1Queue.length - 1];
    const array2QueueItem = array2Queue[array2Queue.length - 1];
    
    if(array1QueueItem.length !== array2QueueItem.length) {
      return false;
    }
    
    for(var i = 0; i < array1QueueItem.length; i++) {
      if(isArray(array1QueueItem[i]) !== isArray(array2QueueItem[i])) {
        return false;
      }
      
      if(isArray(array1QueueItem[i])) {
          array1Queue.unshift(array1QueueItem[i]);
          array2Queue.unshift(array2QueueItem[i]);
      }
    }
    array1Queue.pop();
    array2Queue.pop();
  }

  return true;
};
