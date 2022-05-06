/*
  从面值为 1 2 5 10 的硬币中找零 36 块钱，最少要几枚硬币
*/

const coins = [1, 2, 5, 10]
const amount = 36

// !贪心算法
const coinNumbers = (coins, amount) => {
  const temp = []
  for (let i = coins.length - 1; i >= 0; i--) {
    while (amount >= coins[i]) {
      temp.push(coins[i])
      amount -= coins[i]
    }
  }
  console.log(temp)
  return temp.length
}

console.log(coinNumbers(coins, amount))
