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
    // код для задачи №3 писать здесь
    // return verdict
}