function saturdayFun (action = "roller-skate"){
    return `This Saturday, I want to ${action}!`;
}


function mondayWork (location = "go to the office") {
    return  `This Monday, I will ${location}.`;
}

let wrapAdjective = function (style = "*") {
    return function (phrase = "a hard worker") {
        return `You are ${style}${phrase}${style}!`
    }
}