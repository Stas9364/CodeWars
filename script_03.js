function generateHashtag (str) {
    if (str.trim() === '') return false;

    let x = str
    .split(' ')
    .map(word => word.charAt(0).toUpperCase() + word.substr(1))
    .join('');

    let string = `#${x}`;
    
    if (string.length > 140) {
        return false
    }else {
        return string;
    }
    
}



