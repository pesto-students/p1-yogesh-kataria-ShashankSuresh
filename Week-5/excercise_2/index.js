// vowelcout using map

const vowelCount = (text) =>{
    const mapping = new Map();
    for(let value of text){
        let matchedInstance = "aeiou".includes(value.toLowerCase());

        if(matchedInstance){
            let textCount = mapping.get(value) || 0;
            mapping.set(value, textCount + 1);
        }
    }
    return mapping;
}


console.log(vowelCount("Yogesh Kataria")); //Map { 'o' => 1, 'e' => 1, 'a' => 3, 'i' => 1 }