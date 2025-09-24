class CartItem {
    constructor(productId, price, quantity) {
      this.productId = productId;
      this.price = price;
      this.quantity = quantity;
    }
  
    getTotal() {
      return this.price * this.quantity;
    }
  }
 
  class Cart {
    constructor(customerId) {
      this.customerId = customerId;
      this.items = [];
    }
  
    addItem(productId, price, quantity) {
      this.items.push(new CartItem(productId, price, quantity));
    }
  
    removeItem(productId) {
      this.items = this.items.filter(i => i.productId !== productId);
    }
  
    getTotal() {
      return this.items.reduce((sum, i) => sum + i.getTotal(), 0);
    }
  }
  
  class OrderItem {
    constructor(productId, price, quantity) {
      this.productId = productId;
      this.price = price;
      this.quantity = quantity;
    }
  
    getTotal() {
      return this.price * this.quantity;
    }
  }
  
  class Order {
    constructor(customerId, items) {
      this.customerId = customerId;
      this.items = items.map(i => new OrderItem(i.productId, i.price, i.quantity));
      this.status = "pending"; // pending | paid | shipped
      this.createdAt = new Date();
    }
  
    getTotal() {
      return this.items.reduce((sum, i) => sum + i.getTotal(), 0);
    }
  
    setStatus(newStatus) {
      this.status = newStatus;
    }
  }
  