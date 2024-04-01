// Давайте-ка нашего парня, чтобы он не зазнавался переселим в ‘city’ 'Bobryisk' , а потом опять же убедимся в консоли, что мы все правильно скопировали. (Т.е. необходимо создать глубокую копию объекта passportWithAddress, а затем 'LA' заменить на 'Bobryisk' в city).
// ❗Для того, чтобы проверить правильность данного задания должно быть выведено 2 console.log

let passportWithAddress = {
	name: "Petr",
	surname: "Petrov",
	address: {
		country: "USA",
		city: "LA"
	}
};

let clonePassportWithAddress = structuredClone(passportWithAddress);
clonePassportWithAddress.address.city = "Bobryisk";

console.log(passportWithAddress.address.city);
console.log(clonePassportWithAddress.address.city);

