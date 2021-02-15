function transform(input) {
    let value = 1;
    let result = '['
    for (var i = 0; i < input.length; i++) {
        if (input[i] == input[i + 1]) {
            value++;
        } else {
            result += "(\"" + input[i] + "\""+', ' + value + ")";
            value = 1;
        }
    }

    result += ']';

    console.log(result)

}



transform("aaaabbbccabc")
