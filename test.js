function getEvenNumber() {
    let result = []
    for (let i = 0; i < 50; i++) {
        if ( i % 2 != 0) {
            result.push(i+1);
        }
    }
    return result;
}