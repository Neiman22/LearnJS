function checkCoupon(enteredCode, correctCode, currentDate, expirationDate){
  if (enteredCode === correctCode) {
    if (Date.parse(currentDate) < Date.parse(expirationDate)) {
      return true;
    } else {
      return false;
    }
  } else {
    return false;
  }
}

function checkCoupon2(enteredCode, correctCode, currentDate, expirationDate){
  return enteredCode === correctCode && Date.parse(currentDate) <= Date.parse(expirationDate);
}

console.log(checkCoupon('123','123','September 5, 2014','October 1, 2014'));
console.log(checkCoupon('123a','123','September 5, 2014','October 1, 2014'));