# ESLint and Prettier Setup Guide

This guide explains how to properly configure and integrate ESLint and Prettier into your project to maintain clean, consistent code. The instructions cover how to use these tools both via the terminal and through extensions.

---

## ESLint Configuration

### Setting Up ESLint via Terminal

Follow these steps to set up and configure ESLint in your project using the terminal:

1. **Initialize Your npm Project**  
   Create or ensure your project has a `package.json` file by running:

   ```bash
   npm init -y
   ```

2. **Install ESLint**  
   Visit the [ESLint official website](https://eslint.org/) and install ESLint in your project by running:

   ```bash
   npm init @eslint/config@latest
   ```

3. **Follow the Setup Prompts**  
   During the installation process, follow the prompts to choose the rules and configurations you want for your project.

4. **Check ESLint Rules**  
   Refer to the [ESLint documentation](https://eslint.org/docs/latest/rules) to review available rules and configure them as needed.

5. **Custom Rule Configuration**  
   After installing ESLint, you will find a file named `eslint.config.mjs` in your project. You can customize your ESLint rules by adding configurations directly to this file. For example:

   ```javascript
   {
     "rules": {
       "no-unused-vars": "warn"
     }
   }
   ```

   This configuration will issue a warning instead of an error when there are unused variables in your code.

6. **Add Scripts to `package.json`**  
   Add these scripts to your `package.json` file for easy access to linting commands:

   ```json
   "scripts": {
     "lint": "eslint .",
     "lint:fix": "eslint --fix"
   }
   ```

   Now, you can run the following commands to check and fix linting errors:

   ```bash
   npm run lint       # Check for linting errors
   npm run lint:fix   # Automatically fix linting errors
   ```

---

### Setting Up ESLint via Extension

You can also set up ESLint using a Visual Studio Code extension, making it easier to lint your code automatically while you write.

1. **Install the ESLint Extension**  
   Open Visual Studio Code and install the ESLint extension from the Extensions Marketplace.

2. **Configure the Extension**  
   After installing the extension, ESLint will start working in the background as you code, showing linting errors directly in the editor.

3. **Sync with Workspace Settings**  
   To make ESLint work across different projects or editors, you can add the following settings to your `settings.json` file in the `.vscode` folder:

   ```json
   {
   	"editor.codeActionsOnSave": {
   		"source.fixAll.eslint": true
   	}
   }
   ```

   This will ensure that ESLint automatically fixes issues on save.

---

## Prettier Configuration

### Setting Up Prettier via Terminal

Prettier is a code formatter that enforces a consistent style. Follow these steps to configure Prettier using the terminal:

1. **Initialize Your npm Project**  
   Make sure your project has a `package.json` file:

   ```bash
   npm init -y
   ```

2. **Install Prettier**  
   Visit the [Prettier official website](https://prettier.io/) and install it by running:

   ```bash
   npm install --save-dev --save-exact prettier
   ```

3. **Create Prettier Configuration File**  
   Add a `.prettierrc` file to your project to define formatting rules. You can find the available options on the [Prettier configuration page](https://prettier.io/docs/en/options).

4. **Create a Prettier Ignore File**  
   Add a `.prettierignore` file to specify which files Prettier should ignore.

5. **Run Prettier**  
   To check which files will be formatted, run:
   ```bash
   npx prettier .
   ```
   To apply the formatting to all files, use:
   ```bash
   npx prettier --write .
   ```

---

### Setting Up Prettier via Extension

1. **Install the Prettier Extension**  
   Open Visual Studio Code and install the Prettier extension from the Extensions Marketplace.

2. **Configure Prettier Settings**  
   Once installed, you can configure Prettier settings by creating a `settings.json` file inside the `.vscode` folder, or adjusting the settings via the editor's preferences.

3. **Use Prettier on Save**  
   To automatically format files on save, add the following configuration to `settings.json`:
   ```json
   {
   	"editor.formatOnSave": true
   }
   ```

---

## Integrating ESLint and Prettier

### Using `eslint-plugin-prettier`

To integrate Prettier with ESLint and avoid conflicting rules, you can use `eslint-plugin-prettier`. Follow these steps:

1. **Install the Plugin and Config File**  
   Install the required dependencies:

   ```bash
   npm install -D eslint-plugin-prettier eslint-config-prettier
   ```

2. **Configure ESLint to Use Prettier**  
   In your `eslint.config.mjs` file, add the Prettier plugin:

   ```javascript
   import eslintPluginPrettier from "eslint-plugin-prettier/recommended";
   ```

3. **Add the Plugin to ESLint Configuration**  
   Enable `eslint-plugin-prettier` in your ESLint configuration by adding it to your `.eslintrc` file:

   ```json
   {
   	"extends": ["plugin:prettier/recommended"]
   }
   ```

4. **Apply Rules Automatically in VSCode**  
   You can also create a `settings.json` file in the `.vscode` folder to apply these rules across different workspaces:
   ```json
   {
   	"editor.codeActionsOnSave": {
   		"source.fixAll.eslint": true
   	}
   }
   ```

This ensures that ESLint and Prettier work together harmoniously, fixing and formatting your code whenever you save.

---

## Additional Resources

- [ESLint Official Website](https://eslint.org/)
- [Prettier Official Website](https://prettier.io/)
- [ESLint Configuration Documentation](https://eslint.org/docs/latest/rules)
- [Prettier Configuration Options](https://prettier.io/docs/en/options)




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


## **Foundational Rules**

### 1. **Naming Components**
- Use **PascalCase** for component names to distinguish them from HTML tags.

**Bad:**
   ```jsx
   function usercard() {
     return <div>User Card</div>;
   }
   ```

**Good:**
   ```jsx
   function UserCard() {
     return <div>User Card</div>;
   }
   ```

### 2. **Organize Helper Functions**
- Move helper functions **outside** the component to keep it clean.

**Bad:**
   ```jsx
   function UserCard({ user }) {
     const formatDate = (date) => new Date(date).toLocaleDateString();
     return <div>{formatDate(user.dob)}</div>;
   }
   ```

**Good:**
   ```jsx
   const formatDate = (date) => new Date(date).toLocaleDateString();

   function UserCard({ user }) {
     return <div>{formatDate(user.dob)}</div>;
   }
   ```

### 3. **Avoid Hardcoding Repetitive Markup**
- Use `.map()` for rendering lists dynamically instead of repeating code.

**Bad:**
   ```jsx
   <div>Apple</div>
   <div>Banana</div>
   <div>Orange</div>
   ```

**Good:**
   ```jsx
   const fruits = ['Apple', 'Banana', 'Orange'];

   return (
     <>
       {fruits.map(fruit => (
         <div key={fruit}>{fruit}</div>
       ))}
     </>
   );
   ```

### 4. **Keep Components Small and Focused**
- Split large components into smaller, more manageable ones.

**Bad:**
   ```jsx
   function UserProfile({ user }) {
     return (
       <div>
         <div>Name: {user.name}</div>
         <div>Email: {user.email}</div>
         <div>Address: {user.address}</div>
         <div>Phone: {user.phone}</div>
         <button>Edit Profile</button>
       </div>
     );
   }
   ```

**Good:**
   ```jsx
   function UserInfo({ user }) {
     return <div>{user.name}, {user.email}</div>;
   }

   function UserAddress({ address }) {
     return <div>{address}</div>;
   }

   function UserProfile({ user }) {
     return (
       <div>
         <UserInfo user={user} />
         <UserAddress address={user.address} />
         <button>Edit Profile</button>
       </div>
     );
   }
   ```

### 5. **Destructure Props**
- Destructure props directly to make the code cleaner.

**Bad:**
   ```jsx
   function Greeting(props) {
     return <div>Hello, {props.name}!</div>;
   }
   ```

**Good:**
   ```jsx
   function Greeting({ name }) {
     return <div>Hello, {name}!</div>;
   }
   ```

### 6. **Pass Objects Instead of Primitives**
- Group related data into objects and pass them instead of separate primitive values.

**Bad:**
   ```jsx
   function UserCard({ name, email, age }) {
     return <div>{name} - {email} - {age}</div>;
   }
   ```

**Good:**
   ```jsx
   function UserCard({ user }) {
     return <div>{user.name} - {user.email} - {user.age}</div>;
   }
   ```

### 7. **Use Key Props in Lists**
- Always provide a unique `key` prop when rendering lists.

**Bad:**
   ```jsx
   {items.map(item => (
     <li>{item.name}</li>
   ))}
   ```

**Good:**
   ```jsx
   {items.map(item => (
     <li key={item.id}>{item.name}</li>
   ))}
   ```

### 8. **Use Fragments to Avoid Extra DOM Nodes**
- Use React Fragments (`<>...</>`) instead of adding unnecessary `div` elements.

**Bad:**
   ```jsx
   return (
     <div>
       <h1>Title</h1>
       <p>Description</p>
     </div>
   );
   ```

**Good:**
   ```jsx
   return (
     <>
       <h1>Title</h1>
       <p>Description</p>
     </>
   );
   ```

### 9. **Conditional Rendering with Ternary Operator**
- Use the ternary operator instead of the `&&` operator for better readability.

**Bad:**
   ```jsx
   {isLoggedIn && <div>Welcome back!</div>}
   ```

**Good:**
   ```jsx
   {isLoggedIn ? <div>Welcome back!</div> : <div>Please log in.</div>}
   ```

---

## **Advanced Rules**

### 10. **Avoid Nested Ternary Operators**
- Nested ternary operators can be hard to read; refactor into functions or `if-else` blocks.

**Bad:**
   ```jsx
   {isLoggedIn ? (isAdmin ? <AdminPanel /> : <UserPanel />) : <LoginForm />}
   ```

**Good:**
   ```jsx
   function renderPanel() {
     if (!isLoggedIn) return <LoginForm />;
     return isAdmin ? <AdminPanel /> : <UserPanel />;
   }

   return <div>{renderPanel()}</div>;
   ```

### 11. **Separate Business Logic from Component State**
- Move complex business logic to hooks or helper functions to keep components focused on rendering.

**Bad:**
   ```jsx
   function Profile({ userId }) {
     const [profile, setProfile] = useState(null);

     useEffect(() => {
       fetch(`/api/profile/${userId}`)
         .then(response => response.json())
         .then(data => setProfile(data));
     }, [userId]);

     return <div>{profile ? profile.name : 'Loading...'}</div>;
   }
   ```

**Good:**
   ```jsx
   function useProfile(userId) {
     const [profile, setProfile] = useState(null);

     useEffect(() => {
       fetch(`/api/profile/${userId}`)
         .then(response => response.json())
         .then(data => setProfile(data));
     }, [userId]);

     return profile;
   }

   function Profile({ userId }) {
     const profile = useProfile(userId);

     return <div>{profile ? profile.name : 'Loading...'}</div>;
   }
   ```

### 12. **Use React Hooks Correctly**
- Always follow the **Rules of Hooks**: only call hooks at the top level and never inside conditions or loops.

**Bad:**
   ```jsx
   function Profile({ userId }) {
     if (userId) {
       const profile = useProfile(userId); // Hooks cannot be inside a condition
     }
     return null;
   }
   ```

**Good:**
   ```jsx
   function Profile({ userId }) {
     const profile = useProfile(userId); // Hooks are always at the top level
     return profile ? <div>{profile.name}</div> : null;
   }
   ```

### 13. **Memoize Expensive Calculations**
- Use `useMemo` to prevent expensive calculations from being performed on every render.

**Bad:**
   ```jsx
   const total = calculateTotal(items);
   ```

**Good:**
   ```jsx
   const total = useMemo(() => calculateTotal(items), [items]);
   ```

### 14. **Keep Components Stateless When Possible**
- If a component doesn't need state, keep it stateless. Stateless components are simpler and easier to maintain.

**Bad:**
   ```jsx
   function Greeting({ name }) {
     const [greeting, setGreeting] = useState(`Hello, ${name}`);
     return <div>{greeting}</div>;
   }
   ```

**Good:**
   ```jsx
   function Greeting({ name }) {
     return <div>Hello, {name}</div>;
   }
   ```

### 15. **Don’t Overuse `useEffect`**
- Avoid placing all logic inside `useEffect`. Only use it for side effects and move other logic to functions.

**Bad:**
   ```jsx
   useEffect(() => {
     const calculateTotal = () => { ... };
     calculateTotal();
   }, []);
   ```

**Good:**
   ```jsx
   function calculateTotal() { ... }

   useEffect(() => {
     calculateTotal();
   }, []);
   ```

**Good:**
   ```jsx
   function calculateTotal() { ... }

   useEffect(() => {
     calculateTotal();

     // use clear return function
     return () => {
        // cleanup
     }
   }, []);
   ```

---

This structure provides a clear distinction for your team, allowing beginners to start with simpler concepts and gradually adopt advanced techniques as they become more comfortable with React.
