if (cart.length === 0) {
    return `Your shopping cart is empty.`
  } else if (cart.length === 1) {
    return `In your cart, you have ${getCart()[0].itemName} at $${getCart()[0].itemPrice}.`
  } else if (cart.length === 2) {
    for (var counter = 0; counter < cart.length; counter++) {
       return `In your cart, you have ${getCart()[counter].itemName} at $${getCart()[counter].itemPrice}, and ${getCart()[getCart().length-1].itemName} at $${getCart()[getCart().length-1].itemPrice}.`
  } else if (cart.length === 3 || cart.length > 3) {
    var messageOne = `In your cart, you have`
     messageTwo += ` , ${getCart()[i].itemName} at $${getCart()[i].itemPrice}`
  }
  messageOne += `${messageTwo}, and ${getCart()[getCart().length-1].itemName} at $${getCart([getCart(.length-1)].itemPrice)}`
    }
  }
