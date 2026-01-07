# Props Drilling

Status: Not Started
Created time: December 14, 2024 10:17 PM
Last edited time: January 6, 2026 6:41 PM

## 👉 Props

- Props are used to make the components in ReactJS reusable.
- Consider we have a button & we have to place that button in different places. In that situation, we can create a button component & instead of hard coding the data(physically writing the data), we can send the data from the parent component and use it in the child component.

```jsx
import React, { useState } from 'react';
import Card from './components/Card';  
import Card2 from './components/Card2';

function App(){
	return(
    <div>
      <Card text = "Know More" color = "bg-red-700"/>
      <Card text = "Download" color = "bg-zinc-700"/>
    </div>
  )
}

export default App;
}
```

- In the above code, we assigned data to the Card Components. Now we can substitute those data in the required places in the card component instead of physically writing the data.

```jsx
import React from "react";

function Card({text, color}){
    return(
        <button className={`w-24 h-10 ${color} text-white rounded-full m-5`}>{text}</button>
    )
}

export default Card;
```

- In the above code, we have substituted the data `text and color` into the card component.

## 👉 Lifting State Up