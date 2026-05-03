# Random User Generator

A React + TypeScript application that fetches and displays a random user from a public API. The project focuses on API integration, component structure, and handling loading and error states.

---

## Features

* Fetch a random user from API
* Display user details (name, email, phone, location, avatar)
* Loading and error state handling
* Refresh button to get a new user
* Component-based architecture
* TypeScript for type safety

---

## Tech Stack

* React
* TypeScript
* Tailwind CSS
* Fetch API

---

## API Endpoint

```id="u1x8kp"
https://api.freeapi.app/api/v1/public/randomusers/user/random
```

---

## Data Handling

The API response contains nested user data. The app extracts only the required fields and stores a clean, typed user object for rendering.

---

## Getting Started

```bash id="l3mz8q"
npm install
npm run dev
```

---

## Notes

* UI is minimal; focus is on logic and structure
* Uses reusable components for scalability
* Ready for styling improvements and feature expansion

---

## Future Improvements

* Enhanced UI with better layouts
* Add multiple users view
* Add search/filter functionality
* Integrate state management or React Query

---
