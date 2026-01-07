# React-Behind the Scenes

Status: Not Started
Created time: July 25, 2025 2:10 PM
Last edited time: December 19, 2025 10:21 PM

## 👉 Reconciliation

- **Reconciliation** is the **process React uses to update the DOM** when the state or props of a component change.
- You make changes in your React app ➝ React figures out *what exactly changed* ➝ only updates *those parts* in the DOM.
- This whole process of figuring out what needs to change is called **Reconciliation**.
    - **Reconciliation** = the full process of comparing and updating the DOM
    - **Diffing Algorithm** = the smart comparison strategy used inside that process

## 👉 React Fibre

**Fiber is a reimplementation of React’s core algorithm** for rendering and updating the DOM. It's the reason React is now:

- **Faster**
- **More responsive**
- **Interruptible and incremental** in rendering

A **Fiber is a JavaScript object** representing **a unit of work** in the React tree.

Each component in your UI becomes a **fiber node**, with:

- The component type
- Its props
- Its DOM state
- Effect information
- Child and sibling relationships

Think of it like a **linked list tree** where React can traverse, pause, and resume rendering.

### ❗️Key features

| Feature | Description |
| --- | --- |
| **Incremental rendering** | Break rendering work into chunks |
| **Interruptible work** | Pause and resume rendering (avoids blocking the main thread) |
| **Prioritization** | Important updates like typing get higher priority |
| **Concurrency** | Supports concurrent mode for more fluid rendering |
| **Backwards compatibility** | Existing code continues to work |

## 👉 Hydration

- **Hydration** is a concept mainly used in **Server-Side Rendering (SSR)**.
- Hydration is the process of turning static HTML (sent from the server) into a fully interactive React app on the client-side.

### ❗️What happens without Hydration?

In traditional **Client-Side Rendering**:

- The browser loads a mostly empty HTML file.
- React then builds the entire UI in the browser using JavaScript.

But with **Server-Side Rendering (SSR)**:

- The server sends **fully rendered HTML** to the browser.
- This is **fast to display** and **SEO-friendly**.
- However, that HTML is **not interactive** yet (no click handlers, no state).

This is where the Hydration comes in place:

When the HTML reaches the browser:

1. React **takes over the static HTML**.
2. It **attaches event listeners**, state, and other JavaScript behaviors.
3. This process is called **hydration**.