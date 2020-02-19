function isHot(temp) {
  if (temp >= 80){
    return "Yes, it is indeed hot."
  } else return 'No, it is not hot.'
}


function helloThere(name) {
  if (name.length >= 6){
    return 'Hi, '+name
  }else return 'Hello, '+name

}


function goodbyeYou(name) {
  
if (name === undefined)
  {return 'Goodbye, stranger'}
  else return 'Goodbye, ' + name

}


module.exports = {
  isHot,
  helloThere,
  goodbyeYou,
}