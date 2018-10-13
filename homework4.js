//Task #2
const PatternOnLine = function (num, symbol){
	let string = '';
	while (num > 0){
		num = num -1;
		string = string + symbol;
	}
	return string;
};

const trinagleStars = function (height){
	let line = '';
	let numOfSpaces = height;

	while (height > 0){
		line = PatternOnLine(numOfSpaces - height, ' ') + PatternOnLine((height* 2 - 1), '*');
		height = height - 1;
		console.log (line);
	}
};
trinagleStars (4)

//Task #3
const multiToSingle = function (arr){
	let parentArr = [];
	let i = 0;

	while (i < arr.length){
		let childArr = childArr.length[childArr];
		parentArr = childArr.length[i];
		i = i + 1;
		}

		return parentArr;
	};

//Task #4
const fromMinMax = function (array, bool){

	if (bool){
		let max = array[0];
		let i = 1;
		while (i < array.length){
			if (max < array[i]){
				max = array[i];
			}
			i = i +1;
		}
		return max; 
	}
	else {
		let min = array[0];
		let i = 1;
		while (i < array.length){
			if (min > array[i]){
				min = array[i];
			}
			i = i + 1;
		}
		return min; 
	}
};
console.log (fromMinMax([21, 27, 39], true))

//Task #5

const callThis = function (val){
	console.log (val)
}
const forEach = function (array, func){
	let i = 0;

	while (i < array.length){
		func(array[i]);
		i = i + 1;
	}
};


//Task #6

const sum = function (arr){
	let sum = 0
	let i = 0

	while (i < arr.length){
		sum = sum + arr[i];
		i = i + 1;
	}
	return sum;
};

console.log (sum ([1000,100,10,1]));

//Task #7

const reverse = function (stringgg){
	let str = '';
	let index = stringgg.length - 1;
	while (index >= 0){
		str = str + stringgg[index];
		index = index - 1;
	}
	return str
};

console.log (reverse ('Desserts'));

//Task #8

const starsOnLine = function (n, symb){
	let str = ''

	while (n > 0){
		n = n - 1;
		str = str + symb; 
	};
	return str;
};

const squareStars = function (length){
	let onLine = '';
	let i = 0;
	while (i < length){

		onLine = starsOnLine(length, '* ');

		if (i % 2 !== 0) {
			onLine = ' ' + onLine;
		}
		console.log (onLine);
		i = i + 1;
	};
};

squareStars(5)


