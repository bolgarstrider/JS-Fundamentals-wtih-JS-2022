// You will receive an array, which holds the string and another array. 
// The string is a letter from a young boy who does not yet know some words and you have to help him.
// The letter has a few holes, these holes are the words unknown to the boy and you must fill them 
// with strings from the array you receive at the second index. 
// If the length of the hole is 4 you have to replace it with string with the same length and so on…


function hardWord(input) {
    let words = input.pop();
    let text = input.pop();
    let textArray = text.split(' ')

    for (const el of textArray) {
        if (el.startsWith('_') && el.endsWith('_')) {
            for (const word of words) {
                if (el.length === word.length) {
                    text = text.replace(el, word)
                }
            }
            // in case of punctuation mark (.,!?:)
        } else if (el.startsWith('_')) {
            for (const word of words) {
                if (el.length - 1 === word.length) {
                    //repalce with word + last symbol of the element
                    text = text.replace(el, `${word}${el[el.length-1]}`)
                }
            }
        }
    }

    console.log(text);

}

hardWord(['Hi, grandma! I\'m so ____ to write to you. ______ the winter vacation, so _______ things happened. My dad bought me a sled. Mom started a new job as a __________. My brother\'s ankle is ________, and now it bothers me even more. Every night Mom cooks ___ on your recipe because it is the most delicious. I hope this year Santa will _____ me a robot.',
    ['pie', 'bring', 'glad', 'During', 'amazing', 'pharmacist', 'sprained']
]);