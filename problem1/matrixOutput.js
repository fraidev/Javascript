function transform(input) {
    const charArray = input.split('');
    return charArray.reduce((acc, curr, index, array) => {
        if ((array[index - 1] == array[index]) && acc.length != 0) {
            acc[acc.length - 1][1]++
        } else {
            acc.push([array[index], 1]);
        }
        return acc;
    }, [])
}

console.log(transform("aaaabbbcca"))
