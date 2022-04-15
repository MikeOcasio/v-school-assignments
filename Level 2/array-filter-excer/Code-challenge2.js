const wordarr = ["bird", "bird dog", "humming bird", "dog"];

function oneWordOnly(words) {
  const oneWord = words.filter(function (word) {
    if ( !word.includes(" ")) {
    return word
    }
  });


 return oneWord
}

console.log(oneWordOnly(wordarr)) //=>["bird", "dog"]
