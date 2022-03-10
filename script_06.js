function leastLarger(a, i) {
    let number = a[i];
    let closest = Math.min(...a.filter(num => (num > number)));

    if (closest == Infinity) return -1;

    let index = a.indexOf(closest);
    return index;
}