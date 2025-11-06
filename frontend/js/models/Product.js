export class Product {
  constructor({ _id=null, name, description='', price=0, status='active', createdAt=null }) {
    this.id = _id;
    this.name = name;
    this.description = description;
    this.price = Number(price);
    this.status = status;
    this.createdAt = createdAt ? new Date(createdAt) : null;
  }
}
