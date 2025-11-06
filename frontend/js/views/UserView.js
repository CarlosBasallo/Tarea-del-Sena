import { UserService } from '../services/UserService.js';

export class UserView {
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
      try {
        await UserService.create(payload);
        this.formEl.reset();
        await this.render();
      } catch (err) { alert(err.message); }
    });
  }

  async render() {
    const users = await UserService.list();
    this.listEl.innerHTML = '';
    users.forEach(u => {
      const li = document.createElement('li');

      const name = document.createElement('input');
      name.value = u.name;
      const email = document.createElement('input');
      email.value = u.email;

      const save = document.createElement('button');
      save.textContent = 'Guardar';
      save.onclick = async () => {
        try { await UserService.update(u.id, { name: name.value, email: email.value }); await this.render(); }
        catch (err) { alert(err.message); }
      };

      const del = document.createElement('button');
      del.textContent = 'Eliminar';
      del.onclick = async () => {
        if (confirm('¿Eliminar usuario?')) {
          try { await UserService.remove(u.id); await this.render(); }
          catch (err) { alert(err.message); }
        }
      };

      li.appendChild(name);
      li.appendChild(email);
      li.appendChild(save);
      li.appendChild(del);
      this.listEl.appendChild(li);
    });
  }
}
