export function changeAmount(item, amount) {
  item.guitarAmount = amount;
  item = countItemPrice(item);
  return item;
}

export function countItemPrice(item) {
  item.guitarsPrice = item.guitar.price * item.guitarAmount;
  return item;
}

export function addNewItem(array, item) {
  const newItem = {
    guitar: item,
    guitarAmount: 1,
    guitarsPrice: item.price,
  };
  array.push(newItem);
  return array;
}

function countSummaryPrice(array) {
  let summaryPrice = 0;
  array.forEach(item => {
    summaryPrice += item.guitarsPrice;
  });
  return {
    summaryPrice,
  };
}

export function countSummary(products, prevSummary) {
  const sum = countSummaryPrice(products);
  return {...prevSummary,
          price: sum.summaryPrice,
          totalPrice: sum.summaryPrice,
  };
}
