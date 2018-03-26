function myArrayFilter(arr, callback) {
	var b=[];
	var j=0;

	for (let i=0;i<arr.length;i++) 
	{
		if (callback(arr[i],i,arr)===true) 
		{
			b[j]=arr[i];
			j++;
		}
	}

	return b;
}



function myArrayReduce(arr, callback, acc) 
{


	if (acc===undefined)
	{
		var acc=arr[0];
	}
	else {
		acc=callback(acc, arr[0], 0, arr);
	}
	for(let i=1;i<arr.length;i++) {
		acc=callback(acc,arr[i],i,arr);
	}

	return acc;



}

function myTreeReduce(inFunc, endFunc) {

	var ans;
	return function sol(tree) {
		if (tree.type==='in')
		{
			ans=inFunc(tree.value, sol(tree.left),sol(tree.right));
		}
		if (tree.type==='end')
		{
			ans=endFunc(tree.value);
		}
		return ans;
	}
}
function myTreeSize(tree) {
	var sum=0;
	var inhFunc = (a,b,c) => sum+=1;


	var enFunc = (a) => sum+=1;

	sum=myTreeReduce(inhFunc, enFunc)(tree);
	return sum;
}

function myTreeTraversal(type) {

	var a=[];
	let i=0;
	if (type==='in') {

		return function inorder(tree) {

			if (tree===undefined)
			{
				return;
			}
			inorder(tree.left);
			a[i]=tree.value;
			i+=1;
			inorder(tree.right);

			return a;

		}





	}

	else if (type==='pre')
	{

		return function inorder(tree) {

			if (tree===undefined)
			{
				return;
			}
			a[i]=tree.value;
			i+=1;
			inorder(tree.left);
			inorder(tree.right);

			return a;


		}

	}
	else if(type==='post') {
		return function inorder(tree) {

			if (tree===undefined)
			{
				return;
			}
			inorder(tree.left);
			inorder(tree.right);
			a[i]=tree.value;
			i+=1;

			return a;


		}
	}
}

function hangman(phrase) {



	const gameOver = "Game over!!!";
	const won = "You\'ve got it!!! Final phrase:";
	const wrong = "Incorrect guess!!!";
	const lost = "You\'ve lost!!! Correct phrase:";



	var b=[];
	var count=0;
	var mis=0;
	var game=0;

	var arr=[];

	var orig=phrase.split('');

	arr=phrase.split('');


	for (let i=0;i<arr.length;i++) {
		b[i]='_';
	}

	return function sol(letter) {
		if (game==1)
		{
			return gameOver;
		}
		if (arr.indexOf(letter)>=0 || orig.indexOf(letter)>=0)
		{

			for (i=0;i<arr.length;i++)
			{
				if (arr[i]===letter)
				{
					b[i]=arr[i];

					arr[i]=-1;
					count+=1;
				}
			}

			if (count == arr.length) {
				game=1;
				return won + ' ' + phrase;
			}
			if (count<arr.length) {
				return b.join(' ');
			}




		}
		else
		{
			mis+=1;

			if (mis>=3) {
				game=1;
				return lost + ' ' + phrase;
			}
			else if (count<arr.length) {
				return wrong;
			}
		}
	}



















}

function Person(name, age) {

	this.name=name;	
	this.age=age;
	Person.prototype.about= function () {
		return 'My name is ' + this.name + ' and I\'m ' + this.age + ' yrs old.'
	}


}

function Student(name, age, roll) {
	Person.call(this,name,age);
	this.roll= roll;
	Student.prototype.id = function () {
		return 'Student Id: ' + this.roll;
	}

}
	Student.prototype.__proto__ = Person.prototype;

const numberList = {
numbers: [],
	set add(x) {
		this.numbers.push(x);
	},

	get sum() {
		var ans=0;
		for(let i=0;i<this.numbers.length;i++)
		{
			ans+=this.numbers[i];
		}
		return ans;

	},

	get average() {
		var avg= this.sum;
		return avg/this.numbers.length;
	}
			


};

function carRace(cars, finish) {
	let car = Promise.race(cars).then(function (car) {
			return finish(car.name + ' won in ' + car.time + ' seconds!!!');
			});


}

module.exports = {
	myArrayFilter,
	myArrayReduce,
	myTreeReduce,
	myTreeSize,
	myTreeTraversal,
	hangman,
	Person,
	Student,
	numberList,
	carRace
};
