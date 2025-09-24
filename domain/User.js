class Customer {
  constructor(id, name, email, phone, address, password) {
    this.id = id;
    this.name = name;
    this.email = email;
    this.phone = phone;
    this.address = address;
    this.password = password;
    this.orders = [];
  }

  updateAddress(newAddress) {
    this.address = newAddress; //наприклад customer.updateAddress("Львів, вул. Шевченка 10");
  }

  addOrder(order) {
    this.orders.push(order);
  }

  getOrderHistory() {
    return this.orders;
  }
}
