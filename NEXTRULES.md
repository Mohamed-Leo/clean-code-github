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