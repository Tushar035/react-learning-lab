🚀 React Learning Lab

A structured, hands-on repository for mastering React fundamentals, advanced patterns, performance optimization, and real-world production practices.

# 📂 Project Folder Structure Explanation

This project follows a scalable and production-ready React architecture.

---

## 📁 `assets/`

Contains all static resources used in the application.

### What to add:

* Images (logos, icons)
* SVG files
* Fonts
* Static JSON mock data
* Illustrations

### Example:

```
assets/
  ├── images/
  ├── icons/
  ├── fonts/
```

Purpose:
Keeps media resources separated from logic.

---

## 📁 `components/`

Reusable UI components.

### What to add:

* Button
* Input
* Modal
* FormField
* Navbar
* Loader
* Card
* ProtectedRoute

### Best Practice:

Keep components small and reusable.

Example:

```
components/
  ├── common/
  ├── form/
  ├── navigation/
```

Purpose:
Encourages reusable and maintainable UI.

---

## 📁 `constants/`

Application-wide static values.

### What to add:

* API endpoints
* Roles (ADMIN, USER)
* Validation messages
* App configuration
* Routes list

Example:

```js
export const API_BASE_URL = "https://api.example.com";
```

Purpose:
Avoids hardcoding values inside components.

---

## 📁 `contexts/`

React Context API related logic.

### What to add:

* AuthContext
* ThemeContext
* UserContext
* AppSettingsContext

Example:

```
contexts/
  ├── AuthContext.jsx
```

Purpose:
Global state management without prop drilling.

---

## 📁 `hooks/`

Custom reusable hooks.

### What to add:

* useAuth
* useDebounce
* useLocalStorage
* useFetch
* useFormValidation

Example:

```js
function useDebounce(value, delay) {}
```

Purpose:
Encapsulates reusable logic cleanly.

---

## 📁 `layouts/`

Page layout wrappers.

### What to add:

* MainLayout
* AuthLayout
* DashboardLayout

Example:

```
layouts/
  ├── MainLayout.jsx
  ├── AuthLayout.jsx
```

Purpose:
Defines page structure (header, sidebar, footer).

---

## 📁 `pages/`

Top-level route components.

### What to add:

* LoginPage
* RegisterPage
* DashboardPage
* ProfilePage
* SettingsPage

Each page represents a route.

Example:

```
pages/
  ├── LoginPage.jsx
  ├── RegisterPage.jsx
```

Purpose:
Organizes route-level views.

---

## 📁 `services/`

API communication logic.

### What to add:

* authService.js
* userService.js
* apiClient.js (axios setup)
* tokenService.js

Example:

```js
export const login = (data) => axios.post("/login", data);
```

Purpose:
Separates API logic from UI.

---

## 📁 `styles/`

Global and shared styles.

### What to add:

* global.css
* variables.css
* animations.css
* layout.css

If using Tailwind:

* Tailwind configuration
* Utility overrides

Purpose:
Keeps styling organized and consistent.

---

## 📁 `theme/`

Theme configuration for design systems.

### What to add:

* Light theme config
* Dark theme config
* Color palette
* Typography settings

Example:

```js
export const theme = {
  colors: {
    primary: "#007bff"
  }
};
```

Purpose:
Centralized design configuration.

---

## 📁 `types/` (If using TypeScript)

Type definitions and interfaces.

### What to add:

* User type
* AuthResponse type
* API response models
* Form input types

Example:

```ts
export interface User {
  id: number;
  email: string;
}
```

Purpose:
Improves type safety and maintainability.

---

## 📁 `utils/`

Helper functions and pure utilities.

### What to add:

* formatDate()
* validateEmail()
* formatCurrency()
* debounce()
* localStorage helpers

Example:

```js
export const validateEmail = (email) => /\S+@\S+\.\S+/.test(email);
```

Purpose:
Reusable logic not tied to UI.

---



