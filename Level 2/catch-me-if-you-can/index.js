
sum("", "");

function sum(x, y) {
  //check data types first and throw error
  try {
    if (x && y === NaN) {

      throw new Error("One or more inputs is not a number")
    }
  }

  catch(err){
    console.log(err)
  }
  return x + y;
}




var user = { username: "sam", password: "123abc" };
function login(username, password) {
  //check credentials
}
