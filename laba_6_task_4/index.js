class Client {
    #login;
    #email;

    constructor(login, email) {
      this.#login = login;
      this.#email = email;
    }

    get login() {
      return this.#login;
    }

    set login(value) {
      this.#login = value;
    }

    get email() {
      return this.#email;
    }

    set email(value) {
      this.#email = value;
    }
}

const client1 = new Client('anton', 'anton123@gmail.com');

console.log(client1.login);
console.log(client1.email);

client1.login = 'vlad';
client1.email = 'vlad123@gmail.com';

console.log(client1.login);
console.log(client1.email);
