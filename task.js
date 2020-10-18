String.prototype.isPalindrome = function () {
    let string = this;
    let newString = string.split("").join("").replace(/\s/g, '').toLowerCase();
    let reverseString = newString.split("").reverse().join("");
    console.log(reverseString);
    if (newString == reverseString) {
        return true;
    } else {
        return false;
    }
}



function getAverageMark(marks) {
    // код для задачи №2 писать здесь
    // return averageMark
}

function checkBirthday(birthday) {
    // код для задачи №3 писать здесь
    // return verdict
}