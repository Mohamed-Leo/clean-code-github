console.log("this is another test");

/**
 * ${1:Description placeholder}
 *
 * @type {"hello"}
 */
const hello = "hello";
console.log(hello);

/**
 * ${1:Description placeholder}
 *
 * @param {number} [id=1]
 * @returns {number}
 */
function getUserById(id = 1) {
	return id;
}

console.log(getUserById());
