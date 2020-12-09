const checkForSpam = function(message) {
  let currentMessage = message.toLowerCase();
  if (currentMessage.search("spam") != -1 || currentMessage.search("sale") != -1 ){
    return true;
  }
  else{
    return false;
  }
  
};
console.log(checkForSpam('JavaScript weekly newsletter')); 

console.log(checkForSpam('Get best sale offers now!'));