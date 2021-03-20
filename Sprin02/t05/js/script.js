
function total(addCount, addPrice, currentTotal = 0)  {

    addPrice *= addCount;
    currentTotal += addPrice;
    return currentTotal;
}