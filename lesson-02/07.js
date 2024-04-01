// Ну и вишенка на торт: раз наш парень оказался «в нужное время в нужном месте», пора бы его женить):
// Под surname добавь married: true. И разумеется проверь, что женат только один парень…
// (Т.е. необходимо создать глубокую копию объекта passportMarried , и добавить в него новый ключ: значение).
// ❗1. Для того, чтобы проверить правильность данного задания должно быть выведено 2 console.log
// ❗2. Выводи в консоль первый и второй объект целиком

let passportMarried = {
	name: "Petr",
	surname: "Petrov",
	address: {
		country: "USA",
		city: "Bobryisk"
	}
};

let passportMarriedClone = structuredClone(passportMarried);
passportMarriedClone.married = true;

console.log(passportMarried);
console.log(passportMarriedClone);
