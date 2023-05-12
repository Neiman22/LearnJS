function handAngle (date) {
  let angle = Math.abs(date.getHours() % 12 * 30 - date.getMinutes() * 5.5);
  return Math.min(angle, 360 - angle) / 180 * Math.PI;
}


console.log(makeDate(0, 0)) // 0.0
console.log(makeDate(12, 0)) // 0.0
console.log(makeDate(6, 0)) // 3.141592653589793
console.log(makeDate(1, 0)) // 0.5235987755982988
console.log(makeDate(9, 0)) // 1.5707963267948966
console.log(makeDate(10, 0)) // 1.0471975511965976
console.log(makeDate(0, 15)) // 1.4398966328953218
console.log(makeDate(0, 45)) // 1.9634954084936207
console.log(makeDate(12, 30)) // 2.8797932657906435
console.log(makeDate(7, 15)) // 2.2252947962927703
console.log(makeDate(6, 5)) // 2.6616271092913526