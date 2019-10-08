const MORSE_TABLE = {
    '.-': 'a',
    '-...': 'b',
    '-.-.': 'c',
    '-..': 'd',
    '.': 'e',
    '..-.': 'f',
    '--.': 'g',
    '....': 'h',
    '..': 'i',
    '.---': 'j',
    '-.-': 'k',
    '.-..': 'l',
    '--': 'm',
    '-.': 'n',
    '---': 'o',
    '.--.': 'p',
    '--.-': 'q',
    '.-.': 'r',
    '...': 's',
    '-': 't',
    '..-': 'u',
    '...-': 'v',
    '.--': 'w',
    '-..-': 'x',
    '-.--': 'y',
    '--..': 'z',
    '.----': '1',
    '..---': '2',
    '...--': '3',
    '....-': '4',
    '.....': '5',
    '-....': '6',
    '--...': '7',
    '---..': '8',
    '----.': '9',
    '-----': '0',
};

function decode(expr) {

    let lettersCodes = [];

    for (let i = 0; i < expr.length; i += 10) {
        lettersCodes.push(expr.slice(i, i + 10))
    }

    let lettersMorse = lettersCodes.map(letterCode => {
        let letterMorse = '';
        for (let i = 0; i < letterCode.length; i += 2) {
            if (letterCode[i] === '1') {
                if (letterCode[i + 1] === '0') {
                    letterMorse += '.';
                } else {
                    letterMorse += '-';
                }
            }
        }
        return letterMorse;
    })

    let words = lettersMorse.map(letterMorse => {
        if (letterMorse) {
            return MORSE_TABLE[letterMorse];
        } else return ' ';
    })

    return words.join('');
}

module.exports = {
    decode
}