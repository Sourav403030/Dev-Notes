# Working with API

## 👉 Asynchronous Javascript and XML (AJAX)

It is **not a programming language**, but a **technique** used in web development to:

- **Send/receive data from a server**
- **Without refreshing the entire web page**

### ❗️Technologies involved in AJAX

| Tech | Role |
| --- | --- |
| **JavaScript** | Write logic for requests |
| **XMLHttpRequest** / `fetch()` | Send/receive data |
| **DOM** | Dynamically update the UI |
| **JSON/XML** | Data format for exchange |

### ❗️How AJAX works?

- JavaScript triggers an HTTP request (e.g., user clicks a button)
- Browser sends request to server (using XHR or `fetch`)
- Server processes and sends back data (often in JSON)
- JavaScript receives the response
- DOM is updated without reloading the page

### ❗️AJAX using `fetch`

```jsx
fetch(url)
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => console.error(error));
```