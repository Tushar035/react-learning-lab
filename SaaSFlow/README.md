# React + Vite

This React project explain all concepts related to react router

step 1
npm install react-router-dom

step 2
wrap App component in main.jsx with  BrowserRouter
  <BrowserRouter>
    <App />
  </BrowserRouter>

step 3 
Folder structure

src/
│
├── app/
│   ├── router.jsx
│   └── AppProviders.jsx
│
├── layouts/
│   ├── PublicLayout.jsx
│   └── PrivateLayout.jsx
│
├── pages/
│   ├── public/
│   │   ├── Home.jsx
│   │   ├── About.jsx
│   │   ├── Login.jsx
│   │   └── Register.jsx
│   │
│   ├── private/
│   │   ├── Dashboard.jsx
│   │   ├── Profile.jsx
│   │   ├── Settings.jsx
│   │   └── AdminPanel.jsx
│   │
│   ├── shared/
│   │   ├── NotFound.jsx
│   │   └── Unauthorized.jsx
│
├── routes/
│   ├── ProtectedRoute.jsx
│   └── RoleRoute.jsx
│
├── context/
│   └── AuthContext.jsx
│
├── main.jsx
└── App.jsx


# 🌍 First Understand the Philosophy

In small apps, everything is inside:

```bash
src/
  App.jsx
  Home.jsx
  Login.jsx
```

But in production apps:

* 50+ pages
* 10+ layouts
* Auth
* Roles
* Multi-tenant logic
* APIs
* Feature modules

If you don’t structure properly → project becomes messy and unmaintainable.

So this structure follows:

> 🧠 Separation of Concerns

Each folder has one responsibility.

---

# 📦 src/app/

```bash
src/
├── app/
│   ├── router.jsx
│   └── AppProviders.jsx
```

This folder contains **application-level configuration**.

---

## 🔹 router.jsx

### ✅ What it does

* Contains ALL route definitions
* Central routing logic
* Connects layouts + pages + protection

### ❓ Why separate it?

Instead of putting routes inside `App.jsx`, we isolate them.

Why?

In big apps:

* Routes become large (100+ routes)
* You need dynamic route loading
* You need lazy loading
* You need route config patterns

So we keep routing logic centralized.

Think of it as:

> 🧭 Navigation Brain of the App

---

## 🔹 AppProviders.jsx

### ✅ What it does

Wraps global providers like:

* AuthProvider
* Redux Provider
* ThemeProvider
* React Query Provider

Example:

```jsx
<AuthProvider>
   <App />
</AuthProvider>
```

### ❓ Why not put providers in main.jsx?

You can. But separating them:

* Keeps main.jsx clean
* Makes adding new providers easier
* Improves scalability

Think of it as:

> 🌎 Global environment setup

---

# 📦 src/layouts/

```bash
├── layouts/
│   ├── PublicLayout.jsx
│   └── PrivateLayout.jsx
```

Layouts define the **UI structure**, not the content.

---

## 🔹 PublicLayout.jsx

Used for:

* Home
* Login
* Register
* About

Contains:

* Navbar
* Footer

Example:

```jsx
<nav>Home | About | Login</nav>
<Outlet />
```

### ❓ Why needed?

Without layout:
You repeat navbar in every public page.

Layout = Common UI wrapper.

---

## 🔹 PrivateLayout.jsx

Used for:

* Dashboard
* Profile
* Settings
* Admin

Contains:

* Sidebar
* Logout button
* Header

### ❓ Why separate Public & Private layouts?

Because:

Public pages → marketing UI
Private pages → dashboard UI

They are completely different designs.

---

# 📦 src/pages/

```bash
├── pages/
│   ├── public/
│   ├── private/
│   ├── shared/
```

Pages = Actual screens user sees.

We divide into 3 groups.

---

## 🔹 pages/public/

```bash
Home.jsx
About.jsx
Login.jsx
Register.jsx
```

These:

* Do NOT require authentication
* Accessible by anyone

---

## 🔹 pages/private/

```bash
Dashboard.jsx
Profile.jsx
Settings.jsx
AdminPanel.jsx
```

These:

* Require login
* Protected by ProtectedRoute

---

## 🔹 pages/shared/

```bash
NotFound.jsx
Unauthorized.jsx
```

These:

* Used globally
* Not tied to public or private

Example:

* 404
* 403

---

### ❓ Why divide pages like this?

Because in large apps:

* You instantly know which pages need auth
* You can lazy load private pages separately
* Team members can work independently

---

# 📦 src/routes/

```bash
├── routes/
│   ├── ProtectedRoute.jsx
│   └── RoleRoute.jsx
```

These are NOT pages.

These are **routing logic components**.

---

## 🔹 ProtectedRoute.jsx

Purpose:
Check if user is logged in.

```jsx
if (!user)
   return <Navigate to="/login" />
```

Used when:
You want to block unauthenticated access.

---

## 🔹 RoleRoute.jsx

Purpose:
Check user role.

```jsx
if (user.role !== "admin")
   redirect
```

Used when:
You want role-based access control.

Example:
Admin panel only for admins.

---

### ❓ Why separate them?

Because:

* Routing logic should NOT be inside pages
* Pages should focus on UI
* Security logic should be reusable

---

# 📦 src/context/

```bash
├── context/
│   └── AuthContext.jsx
```

Context stores global state.

AuthContext handles:

* user
* login
* logout

Without context:
You would pass user props everywhere.

Context allows:

```jsx
const { user } = useAuth()
```

Anywhere in app.

---

# 📦 main.jsx

This is entry point.

```jsx
<BrowserRouter>
  <AppProviders>
     <App />
  </AppProviders>
</BrowserRouter>
```

It connects:

* Router
* Providers
* App

---

# 📦 App.jsx

Very clean:

```jsx
export default function App() {
   return <Router />
}
```

Why keep it clean?

Because App should not contain business logic.
It should just mount the router.

---

# 🧠 How Everything Works Together

User visits:

```
/dashboard/profile
```

Flow:

1. main.jsx → wraps app in BrowserRouter
2. Router.jsx → matches route
3. ProtectedRoute → checks authentication
4. PrivateLayout → loads sidebar
5. Outlet → loads Profile page

Each layer has one responsibility.

---

# 🎯 Why This Structure Is Enterprise-Ready

Because it supports:

* Large teams
* Role-based security
* Feature-based expansion
* Multi-tenant extension
* Code splitting
* Microservices backend

It prevents:

* Spaghetti routing
* Mixed logic
* Security mistakes
* Layout duplication

---

# 🧠 Beginner Summary

| Folder   | Responsibility         |
| -------- | ---------------------- |
| app/     | Core app configuration |
| layouts/ | UI wrappers            |
| pages/   | Actual screens         |
| routes/  | Route security logic   |
| context/ | Global state           |
| main.jsx | Entry point            |
| App.jsx  | Mount router           |

