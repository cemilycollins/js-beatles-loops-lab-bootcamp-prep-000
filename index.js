function theBeatlesPlay(musicians, instruments) {
  var newArray = []
  
  for (var i = 0; i < musicians.length; i++) {
    newArray.push(musicians[i] + " plays " + instruments[i])
  }
  
  return newArray
}


function johnLennonFacts(facts) {
  while (var i >= 0) {
    facts[i] = facts[i] + "!!!"
  }
  return facts
}