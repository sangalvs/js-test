const str = "Dave Baker is an Elite {crew member|production crew member|video crew member}. This {designation|status|label|classification} by Assignment Desk is {an extra|an additional|a supplementary|yet another|one extra|one additional} {sign|mark|signal|indication|symbol|endorsement} of {quality|high quality|top quality|good quality|excellence|top notch quality|outstanding quality|superior quality|high-quality|value|superiority}. Elite {crews|crew members|production crew members|video crew members} {have been|are actually|are already|are entirely|have been completely} {vetted|checked} by Assignment Desk as {crew members|production crew members|video crew members|film staff} {that have been|who have been|which have been} on shoots {many times|often|frequently|repeatedly|on numerous occasions|again and again|many times before} with {quality|high quality|top notch|excellent} equipment. {You can trust that|You can rely on|You can be confident|You can depend on|Have confidence} that an Elite {crew|staff member} {will|will certainly|is going to|would certainly|will definitely} {bring|deliver|provide} {an extra|an additional} {level of|amount of|degree of} service on your shoot."

function pickWord(str) {
    word = str[Math.floor(Math.random() * str.length)];
    return word
}


function change(str) {

    str = str.replace(/{/g, ",")
    str = str.replace(/}/g, ",")

    // console.log(str)

    phrases = str.split(",")
    
    // console.log(words)

    for (let i = 0; i < phrases.length; i++) {
        if (phrases[i].includes("|")) {
            let words = [];
            words = phrases[i].split("|");
            phrases[i] = pickWord(words);
        }
      }
    
    // console.log(phrases)

    str = phrases.join("")

    return str;
}


console.log(change(str))