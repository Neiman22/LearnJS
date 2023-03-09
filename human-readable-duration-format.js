function formatDuration (num) {
    if (num === 0) {
        return 'now';
    }
    
    let arrTime = [];
    let time = {year: 31536000, days: 86400, hour: 3600, minute: 60, second: 1};
    let ost = num;
    for (key in time) {
        let res = Math.trunc(ost / time[key]);    
        if (res > 0) {
            arrTime.push(res + ` ${key}` + (res > 1 ? "s" : "") + ", ");
        }
        ost = num % time[key];
    } 

    function formatString(str) {
        str = str.replace(/,\s*$/, '');
        const lastCommaIndex = str.lastIndexOf(',');
        if (lastCommaIndex !== -1) {
            str = str.slice(0, lastCommaIndex) + ' and' + str.slice(lastCommaIndex + 1);
        }
        return str;
    }

    return formatString(arrTime.join(''));
}

console.log(formatDuration(3662));