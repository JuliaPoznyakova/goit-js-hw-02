
const formatString = function(string) {
  if (string.length<=40){
    return string;
  }
  else {
    return `${string.slice(0,40)}...`;
  }
}
console.log(formatString('Curabitur ligula sapien, tincidunt non.'));
console.log(formatString('Vestibulum facilisis, purus nec pulvinar iaculis.'));