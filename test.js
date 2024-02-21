// Assisted by WCA for GP. Latest GenAI contribution: Version 1, granite-20B-code-instruct-v1 model
Here's an example of a JavaScript function that takes an array of numbers as input and returns the sum of all positive numbers in the array:

function getSum(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > 0) {
      sum += arr[i];
    }
  }
  return sum;
}

This function iterates through each element of the array using a for loop. If the current element is greater than zero, it adds it to the running total. Once the loop has completed, the function returns the final sum.

To test this function, you can create an array of numbers and pass it to the function:

const arr = [1, 2, 3, -4, 5];
const sum = getSum(arr);
console.log(sum); // Output: 15

// Assisted by WCA for GP. Latest GenAI contribution: Version 1, granite-20B-code-instruct-v1 model
Here's an example of a JavaScript function that analyzes a collection of customer orders and returns a summary report with the total number of orders, the average order value, and the most frequently ordered product:

function analyzeOrders(orders) {
  let numOrders = orders.length;
  let totalValue = orders.reduce((sum, order) => sum + order.value, 0);
  let averageValue = totalValue / numOrders;

  let products = new Map();
  for (let order of orders) {
    let product = order.product;
    products.set(product, (products.get(product) || 0) + 1);
  }

  let maxCount = 0;
  let mostFrequentProduct = null;
  for (let [product, count] of products) {
    if (count > maxCount) {
      maxCount = count;
      mostFrequentProduct = product;
    }
  }

  return {
    numOrders: numOrders,
    averageValue: averageValue,
    mostFrequentProduct: mostFrequentProduct
  };
}

This function takes an array of orders as input and returns an object containing the total number of orders, the average order value, and the most frequently ordered product.

The function first counts the number of orders using the Array.length property. Then, it sums up the values of all orders using the Array.reduce method. Finally, it divides the total value by the number of orders to calculate the average order value.

To find the most frequently ordered product, the function iterates over the orders and uses a Map data structure to keep track of the number of times each product appears. It then iterates over the Map entries and finds the entry with the highest count.

The function returns an object containing the total number of orders, the average order value, and the most frequently ordered product.
