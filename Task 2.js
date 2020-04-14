exports.CharUp = function firstCharUp(sentence) {
    let CountLetter = '',
        SpacePos = 0,
        UpLetter = '';
    while (true) {
        SpacePos = sentence.indexOf(' ', SpacePos + 1);
        CountLetter = sentence[SpacePos+1].toUpperCase();
        if (SpacePos === -1){
            break;
        }
        UpLetter = `${UpLetter}${CountLetter} `;
    }
    return `${sentence[0].toUpperCase()} ` + UpLetter;
};