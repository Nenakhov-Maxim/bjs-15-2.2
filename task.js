String.prototype.isPalindrome = function () {
    let string = this;
    let newString = string.split("").join("").replace(/\s/g, '').toLowerCase();
    let reverseString = newString.split("").reverse().join("");    
    if (newString == reverseString) {
        return true;
    } else {
        return false;
    }
}

function getAverageMark(marks) {       
    let mark = 0;    
    for (let i = 0, len = marks.length; i < len; i++) {
        mark = mark + marks[i];        
    }
    let roundedAverage = Math.round(mark / marks.length);    
    return roundedAverage;
}

function checkBirthday(birthday) {    
    let now = new Date()
    birthday = new Date(birthday)    
    let birthdayYear = birthday.getFullYear();
    let leapYear = 2020;
    let summLeapYear = 0;
    let msInDay = 24 * 60 * 60 * 1000;
    let msInYears = msInDay * 365;
    while (leapYear >= birthdayYear) {
        leapYear = leapYear - 4;
        summLeapYear +=1;
    }        
    let diff = now - birthday;
    let age = (diff + (summLeapYear * msInDay)) / msInYears;
    let verdict = (age >= 18) ? true : false;    
    return verdict;
}