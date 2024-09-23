import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import ContactList from './components/ContactList.jsx'
// import ContactRow from './components/ContactRow.jsx'

// const dummyContacts = [
//   { id: 1, name: "R2-D2", phone: "222-222-2222", email: "r2d2@droids.com" },
//   { id: 2, name: "C-3P0", phone: "333-333-3333", email: "c3po@droids.com" },
//   { id: 3, name: "BB-8", phone: "888-888-8888", email: "bb8@droids.com" },
// ];

// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <>
//       <div>
//         <a href="https://vitejs.dev" target="_blank">
//           <img src={viteLogo} className="logo" alt="Vite logo" />
//         </a>
//         <a href="https://react.dev" target="_blank">
//           <img src={reactLogo} className="logo react" alt="React logo" />
//         </a>
//       </div>
//       <h1>Vite + React</h1>
//       <div className="card">
//         <button onClick={() => setCount((count) => count + 1)}>
//           count is {count}
//         </button>
//         <p>
//           Edit <code>src/App.jsx</code> and save to test HMR
//         </p>
//       </div>
//       <p className="read-the-docs">
//         Click on the Vite and React logos to learn more
//       </p>
//     </>
//   )
// }

export default function App () {
  return (
    <>
      <ContactList />
    </>
  );
}