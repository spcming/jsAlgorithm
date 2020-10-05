/**
 * @param {string} s
 * @return {boolean}
 */
var isNumber = function(s) {
    const STATE_INITIAL = 1,
        STATE_INT_SIGN = 2,
        STATE_INTEGER = 3,
        STATE_POINT = 4,
        STATE_POINT_WITHOUT_INT = 5,
        STATE_FRACTION = 6,
        STATE_EXP = 7,
        STATE_EXP_SIGN = 8,
        STATE_EXP_NUMBER = 9,
        STATE_END = 10;

    const CHAR_NUMBER = 1,
        CHAR_SIGN = 2,
        CHAR_EXP = 3,
        CHAR_POINT = 4,
        CHAR_SPACE = 5,
        CHAR_ILLEGAL = 6;

    function charType(c){
        if(c>='0'&&c<='9'){
            return CHAR_NUMBER
        }else if(c === '+' || c === '-'){
            return CHAR_SIGN
        }else if(c === 'e' || c === 'E'){
            return CHAR_EXP
        }else if(c === '.'){
            return CHAR_POINT
        }else if(c === ' '){
            return CHAR_SPACE
        }else{
            return CHAR_ILLEGAL
        }
    }

    const switchState={
        [STATE_INITIAL]: {
            [CHAR_NUMBER]: STATE_INTEGER,
            [CHAR_POINT]: STATE_POINT_WITHOUT_INT,
            [CHAR_SIGN]: STATE_INT_SIGN,
            [CHAR_SPACE]: STATE_INITIAL,
        },
        [STATE_INT_SIGN]: {
            [CHAR_NUMBER]: STATE_INTEGER,
            [CHAR_POINT]: STATE_POINT_WITHOUT_INT,
        },
        [STATE_INTEGER]: {
            [CHAR_NUMBER]: STATE_INTEGER,
            [CHAR_EXP]: STATE_EXP,
            [CHAR_POINT]: STATE_POINT,
            [CHAR_SPACE]: STATE_END,
        },
        [STATE_POINT]: {
            [CHAR_NUMBER]: STATE_FRACTION,
            [CHAR_EXP]: STATE_EXP,
            [CHAR_SPACE]: STATE_END,
        },
        [STATE_POINT_WITHOUT_INT]: {
            [CHAR_NUMBER]: STATE_FRACTION
        },
        [STATE_FRACTION]: {
            [CHAR_NUMBER]: STATE_FRACTION,
            [CHAR_EXP]: STATE_EXP,
            [CHAR_SPACE]: STATE_END,
        },
        [STATE_EXP]: {
            [CHAR_NUMBER]: STATE_EXP_NUMBER,
            [CHAR_SIGN]: STATE_EXP_SIGN,
        },
        [STATE_EXP_SIGN]: {
            [CHAR_NUMBER]: STATE_EXP_NUMBER,
        },
        [STATE_EXP_NUMBER]: {
            [CHAR_NUMBER]: STATE_EXP_NUMBER,
            [CHAR_SPACE]: STATE_END,
        },
        [STATE_END]: {
            [CHAR_SPACE]: STATE_END,
        }
    }
    let state = STATE_INITIAL
    for(let i=0;i<s.length;i++){
        let strType = charType(s[i])
        if(switchState[state][strType]){
            state = switchState[state][strType]
        }else{
            return false
        }
    }
    return  state === STATE_INTEGER
        || state === STATE_POINT
        || state === STATE_FRACTION
        || state === STATE_EXP_NUMBER
        || state === STATE_END

};