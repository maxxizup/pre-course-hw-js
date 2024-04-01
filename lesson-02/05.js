// Дан объект passport. Создай его копию и поменяй имя с "Petr" на "Ivan",
// и убедись в консоли, что у объекта passport имя осталось "Petr", а у твоего нового объекта "Ivan".
// ❗Для того, чтобы проверить правильность данного задания должно быть выведено 2 console.log

let passport = {
	name: "Petr",
	surname: "Petrov",
};

let clone = Object.assign({}, passport);
clone.name = "Ivan";

console.log(passport.name);
console.log(clone.name);

