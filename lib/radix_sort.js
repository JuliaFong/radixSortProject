function radixSort(arr) {
    if (!Array.isArray(arr)) {
        return null
    }
    
    let negatives = arr.filter(item => item < 0)
    let negativesSorted = []
    if (negatives.length > 0) {
        negativesSorted = radixSort(negatives.map(item => Math.abs(item)))
        .reverse()
        .map(item => -item)
    }

    let positives = arr.filter(item => item >= 0)
    let maxDigits = getMaxDigits(positives)

    for(let j = 0; j < maxDigits; j++) {
        let bowls = Array.from({length: 10}, () => [])

        for (let i = 1; i < positives.length; i++) {
            let digit = getDigitFrom(positives[i], k)
            bowls[digit].push(positives[i])
        }
        positives = [].concat(...buckets)
    }
    return negativesSorted.concat(positives)

}



module.exports = {
    radixSort
};