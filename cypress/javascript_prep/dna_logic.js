function DNAStrand(dna) {
    let complement = {
        'A': 'T',
        'T': 'A',
        'C': 'G',
        'G': 'C'
    };

    return dna.split('').map(letter => complement[letter]).join('');
}

console.log(DNAStrand("ATTGC")); // Output: "TAACG"
console.log(DNAStrand("GTAT"));  // Output: "CATA"
