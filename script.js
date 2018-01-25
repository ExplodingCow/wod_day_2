function adjacentProduct(num) {
	var previousNumber = num[0]
	var product = 0;
	var previousProduct = 0;
	for (i = 1; i < num.length; i++) {
		product = previousNumber * num[i]
		if (previousProduct < product == true) {
			previousProduct = product
		}
    else {
      previousProduct = num[0] * num[1]
    }
    previousNumber = num[i]
	}
	return previousProduct
}

document.write(adjacentProduct([-3, 1, -2, 6, -8]))