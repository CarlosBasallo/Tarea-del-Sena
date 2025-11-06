import { ProductService } from '../services/ProductService.js';

export class ProductView {
  constructor(listEl, formEl) {
    this.listEl = listEl;
    this.formEl = formEl;
    this.init();
  }

  init() {
    this.formEl.addEventListener('submit', async (e) => {
      e.preventDefault();
      const form = new FormData(this.formEl);
      const payload = Object.fromEntries(form.entries());
      payload.price = Number(payload.price);
      try {
        await ProductService.create(payload);
        this.formEl.reset();
        await this.render();
      } catch (err) { alert(err.message); }
    });
  }

  async render() {
    const products = await ProductService.list();
    this.listEl.innerHTML = '';
    products.forEach(p => {
      const li = document.createElement('li');

      const name = document.createElement('input');
      name.value = p.name;
      const price = document.createElement('input');
      price.type = 'number';
      price.step = '0.01';
      price.value = p.price;
      const desc = document.createElement('input');
      desc.value = p.description;

      const save = document.createElement('button');
      save.textContent = 'Guardar';
      save.onclick = async () => {
        try { await ProductService.update(p.id, { name: name.value, price: Number(price.value), description: desc.value }); await this.render(); }
        catch (err) { alert(err.message); }
      };

      const del = document.createElement('button');
      del.textContent = 'Eliminar';
      del.onclick = async () => {
        if (confirm('¿Eliminar producto?')) {
          try { await ProductService.remove(p.id); await this.render(); }
          catch (err) { alert(err.message); }
        }
      };

      li.appendChild(name);
      li.appendChild(price);
      li.appendChild(desc);
      li.appendChild(save);
      li.appendChild(del);
      this.listEl.appendChild(li);
    });
  }
}
