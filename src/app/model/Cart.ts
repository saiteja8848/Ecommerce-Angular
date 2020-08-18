export class Cart {
  public id: number;
  public name: string;
  public price: number;
  public count: number;
  public totalPrice: number;

  constructor(
    id: number,
    name: string,
    price: number,
    count: number,
    totalPrice: number
  ) {
    this.id = id;
    this.name = name;
    this.price = price;
    this.count = count;
    this.totalPrice = totalPrice;
  }

  setId(id: number) {
    this.id = id;
  }

  setName(name: string) {
    this.name = name;
  }

  setUnitPrice(price: number) {
    this.price = price;
  }

  setCount(count: number) {
    this.count = count;
  }

  setTotalPrice(totalPrice: number) {
    this.totalPrice = totalPrice;
  }
}
