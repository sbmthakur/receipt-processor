function stringPoints(retailer) {
  let points = 0

  for(let c of retailer) {
    let code = c.charCodeAt(0)
  
    if ((code > 47 && code < 58) || (code > 64 && code < 91) || (code > 96 && code < 123)) {
      points += 1
    }
  } 

  return points
}

function totalPricePoints(total) {
  let points = 0
  const totalNum = Number(total)

  if (Math.round(totalNum) === totalNum) {
    points += 50
  }

  if (totalNum % 0.25 === 0) {
    points += 25
  }
  return points
}

function itemPoints(items) {

  let points = 0
  const fac = Math.floor(items.length / 2)
  points += fac * 5

  for (let item of items) {
    const {
      shortDescription,
      price
    } = item

    const trimmedLength = shortDescription.trim().length

    if (trimmedLength % 3 === 0) {
      points += Math.ceil(Number(price) * 0.2)
    }
  }
  return points
}

function purchaseDatePoints(purchaseDate) {

  let points = 0
  const dayNum = Number(purchaseDate.split('-')[2])

  if (dayNum % 2 !== 0) {
    points += 6
  }
  return points
}

function purchaseTimePoints(purchaseTime) {

  let points = 0
  const i = purchaseTime.indexOf(':')

  const time = Number(`${purchaseTime.slice(0, i)}${purchaseTime.slice(i + 1)}`)

  if (time > 1400 && time < 1600) {
    points += 10
  }
  return points 
}

function calculatePoints({
  retailer,
  total,
  purchaseDate,
  purchaseTime,
  items
}) {

  let points = stringPoints(retailer)
  points += totalPricePoints(total)
  points +=  itemPoints(items)
  points += purchaseDatePoints(purchaseDate)
  points += purchaseTimePoints(purchaseTime)

  return points
}

module.exports = {
  calculatePoints
}