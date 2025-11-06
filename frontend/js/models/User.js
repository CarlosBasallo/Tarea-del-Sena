export class User {
  constructor({ _id=null, name, email, password='', role='user', status='active', createdAt=null }) {
    this.id = _id;
    this.name = name;
    this.email = email;
    this.password = password;
    this.role = role;
    this.status = status;
    this.createdAt = createdAt ? new Date(createdAt) : null;
  }
}
