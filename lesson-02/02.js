// Вставь команду debugger и посмотри, что происходит под капотом факториала

debugger;
function factorial(n) {
	if (n === 0 || n === 1) {
		return 1;
	} else {
		return n * factorial(n - 1);
	}
}
console.log(factorial(5));