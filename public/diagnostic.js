/// Ember Object Diagnostic ///

// Use Ember Objects and Classes to represent a shopping cart!
// Your abstractions will be `Cart` and `Order`.
//
// An Order should have
//  -  a unit price
//  -  a quantity
//  -  a computed property called `orderPrice`, equal to price times quantity

const Order = Ember.Object.extend({
  let price = {
    price: 5,
    get: function(){
      return this.price;
    }
  },
  set: function(newVal){
    this.count(newVal);
    return this.
  };

  let quantity = {
    quantitiy: 5,
    get: function(){
      return this.quantity;
    }
  },
  set: function(newVal){
    this.count(newVal);
    return this.
  };
  orderPrice: Ember.computed('price', 'quantity', function(){
    return `${this.get('price')} * ${this.get('quantity')}`
  })
});
//
// A Cart should have
//  -  an `addToCart` method, which adds a given Item to an array
//      called `orders` (HINT: You'll probably need to look through the
//      documentation for this one.)
//  -  a computed property called `totalPrice`, equal to the sum of
//      the `orderPrice` values for everything in the cart); it should be
//      recalculated any time an Order is added to the cart, removed from the
//      cart, or modified.

const Cart = Ember.Object.extend({
  let orders = [],
  addToCart: Ember.computed(),

  totalPrice: Ember.computed(),
});


//
// Once you've created the necessary Ember Classes, create a new Cart instance,
//  and fill that cart up with three new product orders having the following
//  quantities, product names, and prices:
//  -  Order 1 : 2 hats ($5 each)
//  -  Order 2 : 1 desk lamp ($20 each)
//  -  Order 3 : 3 hand towels ($8 each)
