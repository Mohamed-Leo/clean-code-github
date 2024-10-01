/**
 * ${1:Description placeholder}
 *
 * @type {"hello"}
 */
const hello = "hello";

/**
 * ${1:Description placeholder}
 *
 * @returns {${2:*}}
 */
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
