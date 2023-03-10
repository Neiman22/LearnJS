function formatDuration (num) {
    let arrTimes = [];
    arrTimes[0] = Math.trunc(num / 31536000); //years
    arrTimes[1] = Math.trunc(num % 31536000 / 86400); //days
    arrTimes[2] = Math.trunc(num % 31536000 % 86400 / 3600); //hours
    arrTimes[3] = Math.trunc(num % 31536000 % 86400 % 3600 / 60); //minutes
    arrTimes[4] = Math.trunc(num % 31536000 % 86400 % 3600 % 60); //seconds
    
    function formatTime(arrTime) {
        let years = arrTime[0];
        let days = arrTime[1];
        let hours = arrTime[2];
        let minutes = arrTime[3];
        let seconds = arrTime[4];
        let result = "";
      
        if (years > 0) {
            result += years + " year" + (years > 1 ? "s" : "") + ", ";
        }

        if (days > 0) {
            result += days + " days" + (days > 1 ? "s" : "") + ", ";
        }

        if (hours > 0) {
          result += hours + " hour" + (hours > 1 ? "s" : "") + ", ";
        }
      
        if (minutes > 0) {
          result += minutes + " minute" + (minutes > 1 ? "s" : "") + ", ";
        }
      
        if (seconds > 0 || result === "") {
          result += seconds + " second" + (seconds > 1 ? "s" : "") + ", ";
        }
      
        return result;
      }
    
      function formatString(str) {
        str = str.replace(/,\s*$/, '');
        const lastCommaIndex = str.lastIndexOf(',');
        if (lastCommaIndex !== -1) {
          str = str.slice(0, lastCommaIndex) + ' and' + str.slice(lastCommaIndex + 1);
        }
        return str;
      }
    return formatString(formatTime(arrTimes));
}

console.log(formatDuration(1))
console.log(formatDuration(62))
console.log(formatDuration(120))
console.log(formatDuration(3600))
console.log(formatDuration(3662))