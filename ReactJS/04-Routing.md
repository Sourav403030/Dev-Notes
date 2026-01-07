# Routing

## 👉 React-Router-DOM

- Install React Router DOM `npm i react-router-dom` .
- in `main.jsx` "import `BrowserRouter` from `react-router-dom` .
- Wrap by `BrowserRouter` in `main.jsx` file.
- In `App.jsx` import `Route, Routes`  from `react-router-dom` .
- make `<Routes>` (collection of all route) and inside make `<Route/>` .
- In that mention `path` (where to go) and `elements` (what to render) attributes.
- Nestes Routes can be made by writing in this way - `path="/product/men”` .
- Dynamic Routes can be made by writing this way - `path="/product/:id”` .
- You can access `id` by using `useParams()` hook inside that component you rendered in a Dynamic Route.

- To perform routing in React, we have to install `react-router-dom` from npm.

```jsx
npm i react-router-dom
```

- Whenever we move from one page to another page, it occurs due to routing.

```jsx
    	<Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/user" element={<User/>}></Route>
        <Route path="/about" element={<About/>}></Route>
        <Route path="/about/profile" element={<Profile/>}></Route>
        
        // Not found Route - It should always be at the last.
        <Route path="*" element={<NotFound/>}></Route>
      </Routes>
```

- In the above code, `path` is the route and the `element` is the page which has to be rendered when visiting that route.
- Normally we perform routing using the Nav Bar.

```jsx
<NavLink to = "/route">Nav Elements</NavLink>
```

- `NavLink` lets us to add dynamic styling to the elements of the `Navbar` when that particular route is visited like highlighting it.

## 👉 Dynamic Routing

- Dynamic routing is the process of creating routes which changes according to the action of the user. The developers need not change the route hard coded.

```jsx
/profile/:username

//The username can contain any username such as Rahul, Sumit etc. We dont need  to hard code it everytime.
```

```jsx

//App.jsx file

 <Route path="/user/:name" element={<UserDetails/>}></Route>
```

- In `react-router-dom` we get a hook called `useParams()` which helps us to load the respective data for respective users so that every user does not see the same data and only their respective data.

```jsx
function UserDetails(){
    const {name} = useParams();
    const navigate = useNavigate();

    const goBackHandler = () =>{
        navigate("/user");
        //To go back one step
        navigate(-1);
    }
    return(
        <div className='p-5'>
            <h1>Hi {name}</h1>
            <button onClick={goBackHandler} className='px-3 py-1 bg-blue-400 rounded-full mt-3  '>Go Back</button>
        </div>
    )
}
```

- The `going-back` feature can be implemented using a button. The `react-router-dom` provides another hook called `useNavigate()` which helps us to navigate to a specific route, or else it can help to navigate one step backwards.

## 👉 Params / SearchParams / QueryParams

- A URL has two data carrying parts -

```jsx
/users/42?tab=profile&page=2
└───────┘ └──────────────────┘
 route params     query/search params
```

### 🎯 Params

- Embedded **inside the URL path.**
- Identify **what page** you’re on.

```jsx
/products/15
```

### 🎯 QueryParams / SearchParams

- Appended after `?`
- Optional key-value pairs.
- Do **not** affect route matching.

```jsx
/products?category=phone&sort=price
```