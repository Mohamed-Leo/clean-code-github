const hello = "hello";

const helloFunc = () => {
	return console.log(hello);
};
helloFunc();

export default {
	test: "for testing",
	testFunc: () => {
		console.log("this is a testFunc");
	},
};

// Test command with eslint
console.log("test");
