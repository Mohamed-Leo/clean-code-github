# **Coding Standards and Guidelines**

## **1. File Documentation**

- Every file should have its own documentation at the top.
- The documentation should describe:
  1. **What the file is for** : Briefly describe the purpose of the file.
  2. **Functions/Classes/Interfaces/Components**: List only the names of the functions or components handled within the file.

Example:

```javascript
/**
 * This file is responsible for handling user authentication.
 * It includes functions like: isAuthenticated, loginUser, logoutUser.
 */
```

---

## **2. Code Style**

### 2.1 **Variables**

#### **Naming Conventions**

- **Global Variables**:

  - Use snake case, all uppercase for global variables.
  - Example:
    ```javascript
    const API_BASE_URL = "https://example.com/api";
    ```

- **Local Variables**:
  - Use camel case for local variables.
  - Example:
    ```javascript
    let userName = "John";
    ```

#### **When to Use Global Variables**

- Global variables should be used when:
  1. Storing **environment variables**.
  2. Storing **constants** that are reusable and need to be imported across files.

#### **Where to Store Global Variables**

- Store environment variables in the `.env` file.
- Store reusable constants in a **settings or config file**.

#### **Naming Rules**

- Use the **“this is for storing \_\_\_”** rule to clarify the variable's purpose.
- Example:

  ```javascript
  let filteredUsersBasedOnCountry = [];
  ```

- **Booleans** should start with a prefix such as `is` or `has`.
  - Example:
    ```javascript
    let isAuthenticated = false;
    let hasPermissions = true;
    ```

#### **Avoid**

- **Redundant values** in loops. Instead of repeating magic numbers:

  ```javascript
  const loopLimit = 3;
  for (let i = 0; i < loopLimit; i++) {
  	// Loop logic...
  }
  ```

- Avoid **comments** that just repeat what the variable name says:

  ```javascript
  // Instead of:
  let varName; // This is for storing user name

  // Use a meaningful name:
  let userName;
  ```

- Avoid **collapsing multiple variables** in one line:

  ```javascript
  // Instead of:
  let a, b, c;

  // Use separate declarations:
  let a;
  let b;
  let c;
  ```

- **Uninitialized variables** should be avoided:

  ```javascript
  let a; // Avoid

  let initializedValue = 10; // Correct
  ```

---

### 2.2 **Functions**

#### **Function Documentation**

- Use **JSDoc** to document each function.
- Example:
  ```javascript
  /**
   * Retrieves a user by ID.
   * @param {number} id - The ID of the user.
   * @returns {User} The user object.
   */
  function getUserById(id) {
  	// Function logic...
  }
  ```

#### **Naming Conventions**

- Same as variable naming rules but function names should always start with a **verb**.
  - Example:
    ```javascript
    function calculateTotalPrice() {}
    function fetchUserData() {}
    ```

#### **Arguments**

- Minimize the number of arguments passed to a function. Use objects for grouping multiple related arguments when necessary.
- Example:
  ```javascript
  function createUser({ name, age, email }) {
  	// Function logic...
  }
  ```

#### **Functionality**

- Each function should do **one thing only** (atomic functions).
- Example:
  ```javascript
  function calculateTotalPrice(items) {
  	// This function only calculates price, nothing else
  }
  ```

#### **Refactoring**

- If a function exceeds **100 lines**, split it into smaller functions with atomic functionality.

---

### 2.3 **Types, Interfaces, and Classes**

#### **Classes**

- Avoid constructor functions, use **classes** instead.
- All members of a class should be **public** unless specifically required to be private.
- **Helper functions** should be private unless they need to be exposed in the API.
- **Private properties** should start with an underscore (`_`).

  - Example:

    ```typescript
    class User {
    	private _userId: number;
    	public userName: string;

    	constructor(userId: number, userName: string) {
    		this._userId = userId;
    		this.userName = userName;
    	}

    	private _generateUserId() {
    		// Private method logic
    	}
    }
    ```

#### **Interfaces**

- Interface names should start with an **`I`** prefix.
- Example:
  ```typescript
  interface IUser {
  	id: number;
  	name: string;
  	email: string;
  }
  ```

#### **Types**

- Use `types` to create aliases for more complex types or unions.
  - Example:
    ```typescript
    type Status = "active" | "inactive" | "pending";
    ```
    ```typescript
    type TStatus = "active" | "inactive" | "pending";
    ```

---

### 2.4 **Constants**

- Constants should be in **uppercase** and stored in a **separate file** if they are reused across files.

  - Example:
    ```javascript
    export const API_TIMEOUT = 5000;
    export const MAX_USER_LIMIT = 100;
    ```

- Place them in a config or constants file if they are used globally:
  - `config/constants.ts`
    ```typescript
    export const API_BASE_URL = "https://example.com/api";
    ```

---

### 2.5 **File and Folder Naming**

- **Files**: Use camelCase for file names unless they are React components, in which case use PascalCase.

  - Example:
    - `userProfile.ts`
    - `UserProfile.tsx`

- **Folders**: Use **kebab-case** for folder names.
  - Example:
    ```bash
    user-profile/
    ```
