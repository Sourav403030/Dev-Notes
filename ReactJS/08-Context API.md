# Context API

- Traditionally we can only send data from parent  → child → grandchild using props.
- With the help of Context API, we can wrap the whole application with context and create a separate file for centralising the data & connect it with context so that any component can access to the data easily & directly without transferring it hierarchy.

## 👉 Steps to create a Context API

1. Create a folder called `context` in `src` and then create a `context.jsx` file inside `context` folder.
2. We have to wrap the `app` component with the `context` component.

```jsx
//In main.jsx

<Context> //Wrapping the App component with the Context component
      <BrowserRouter>
        <App />
    </BrowserRouter>
    </Context>
)
```

1. Then in the `context.jsx` file, we create the data which has to be centralised.

```jsx
export const UserContext = createContext(); //This creates a context object that we can use in our components.

const Context = (props) => {

    const [user, setuser] = useState([
        {id: 0, name: "John Doe", city: "USA"},
        {id: 1, name: "Rayan", city: "INDIA"},
        {id: 2, name: "Rachel", city: "TOKYO"},
    ])

  return (
    <>
        <UserContext.Provider value={{user, setuser}}>{props.children}</UserContext.Provider> 
        {/* This is the provider component that we will wrap around our components that need access to the data in the context. If {props.children} is not used, we will see only Context because it wraps all other components. */}
    </>

  )
}
```

1. Now the data is centralised. We can use that data in any component we wish without having to use `props` .

```jsx
const User = () => {

    const {user, setuser}=useContext(UserContext); //Destructuring the user and setuser from the UserContext and initializing it with useContext(UserContext)
  return (
    <div>
        <nav>
            {user.map(u => <Link key={u.id} to={`/users/${u.id}`}>{u.name}</Link>)} {/*Iterating over the user array and displaying the name of each user and linking it to the userdetails page*/}
        </nav>
    </div>
  )
}
```

```jsx
const About = () => {
    const {id} = useParams(); //Destructuring the id from the useParams hook
   const {user} = useContext(UserContext); //Destructuring the user from the UserContext and initializing it with useContext(UserContext)
  return (
    <div>
        <h1>{user[id].name}</h1> {/*Displaying the name of the user with the id that we get from the useParams hook*/}
        <h1>{user[id].city}</h1> {/*Displaying the city of the user with the id that we get from the useParams hook*/}
    </div>
  )
}
```