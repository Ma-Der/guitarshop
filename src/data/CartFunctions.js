export function changeAmount(item, amount) {
  item.guitarAmount = amount;
  item = countItemPrice(item);
  return item;
}

export function countItemPrice(item) {
  item.guitarsPrice = item.guitar.price * item.guitarAmount;
  item.oldGuitarsPrice = item.guitarsPrice;
  return item;
}

export function addNewItem(array, item) {
  const newItem = {
    guitar: item,
    guitarAmount: 1,
    guitarsPrice: item.price,
    oldGuitarsPrice: item.price
  };
  array.push(newItem);
  return array;
}

function countSummaryPrice(array) {
  let summaryPrice = 0;
  let prevSummaryPrice = 0;
  array.forEach(item => {
    summaryPrice += item.guitarsPrice;
    prevSummaryPrice += item.oldGuitarsPrice;
  });
  return {
    summaryPrice,
    prevSummaryPrice,
  };
}

export function countSummary(products, prevSummary) {
  const sum = countSummaryPrice(products);
  return {...prevSummary,
          price: sum.summaryPrice,
          totalPrice: sum.summaryPrice,
          discount: sum.prevSummaryPrice - sum.summaryPrice
  };
}
