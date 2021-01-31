// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

function reverse(str) {
    // -------------------------
    //solution 1
    // -------------------------

    // const arr = str.split('');
    // arr.reverse();
    // return arr.join('');

    // --------------------------
    //solution 2 which is the same as 1, but better formatted
    // -------------------------

    return str
        .split('')
        .reverse()
        .join('')
    // -------------------------
    //solution 3
    // -------------------------
    
    // let reversed = "";

    // for (let character of str) {
    //     reversed = character + reversed;
    // }

    // return reversed;

    // -------------------------
    //solution 4
    // -------------------------

    // return str.split('').reduce((reversed, character) => {
    //     return character + reversed;
    // }, '');
}

module.exports = reverse;
