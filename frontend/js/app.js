import { UserView } from './views/UserView.js';
import { ProductView } from './views/ProductView.js';
import User from './models/User.js';
import Product from './models/Product.js';

window.addEventListener('DOMContentLoaded', async () => {
  const userView = new UserView(
    document.getElementById('user-list'),
    document.getElementById('user-form'),
  );
  await userView.render();

  const productView = new ProductView(
    document.getElementById('product-list'),
    document.getElementById('product-form'),
  );
  await productView.render();
});
