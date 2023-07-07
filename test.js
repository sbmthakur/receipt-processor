const assert = require('assert')
const { calculatePoints } = require('./points')

describe('Test Points', () => {
  it('should return points', () => {

    let data = {
      "retailer": "TargetD",
      "purchaseDate": "2022-01-01",
      "purchaseTime": "13:01",
      "items": [
        {
          "shortDescription": "Mountain Dew 12PK",
          "price": "6.49"
        },{
          "shortDescription": "Emils Cheese Pizza",
          "price": "12.25"
        },{
          "shortDescription": "Knorr Creamy Chicken",
          "price": "1.26"
        },{
          "shortDescription": "Doritos Nacho Cheese",
          "price": "3.35"
        },{
          "shortDescription": "   Klarbrunn 12-PK 12 FL OZ  ",
          "price": "12.00"
        }
      ],
      "total": "35.00"
    }

    let points = calculatePoints(data)
    assert(points === 104)

    data = {
      "retailer": "Target",
      "purchaseDate": "2022-01-01",
      "purchaseTime": "13:01",
      "items": [
        {
          "shortDescription": "Mountain Dew 12PK",
          "price": "6.49"
        }, {
          "shortDescription": "Emils Cheese Pizza",
          "price": "12.25"
        }, {
          "shortDescription": "Knorr Creamy Chicken",
          "price": "1.26"
        }, {
          "shortDescription": "Doritos Nacho Cheese",
          "price": "3.35"
        }, {
          "shortDescription": "   Klarbrunn 12-PK 12 FL OZ  ",
          "price": "12.00"
        }
      ],
      "total": "35.35"
    }

    points = calculatePoints(data)
    assert(points === 28)

    data = {
      "retailer": "M&M Corner Market",
      "purchaseDate": "2022-03-20",
      "purchaseTime": "14:33",
      "items": [
        {
          "shortDescription": "Gatorade",
          "price": "2.25"
        }, {
          "shortDescription": "Gatorade",
          "price": "2.25"
        }, {
          "shortDescription": "Gatorade",
          "price": "2.25"
        }, {
          "shortDescription": "Gatorade",
          "price": "2.25"
        }
      ],
      "total": "9.00"
    }

    points = calculatePoints(data)
    assert(points === 109)
  })
})

