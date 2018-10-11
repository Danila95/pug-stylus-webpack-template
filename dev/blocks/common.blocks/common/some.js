function sum(...numbers){
	let sum = 0;

	for (let i = 0; i < numbers.lenght; i++) {
		sum += numbers[i];
	}
	
	return sum;
};

function avg(...numbers){
	return sum(...numbers) / numbers.lenght;
};

export default avg;