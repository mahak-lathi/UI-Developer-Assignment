// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'

// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <>
//       <div>
//         <a href="https://vite.dev" target="_blank">
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

// export default App


import { useState } from "react";
import { ThemeProvider, CssBaseline, Box } from "@mui/material";
import { getDesignTokens } from "./theme";
import { createTheme } from "@mui/material/styles";
import Sidebar from "./components/Sidebar";
import Header from "./components/Header";
import Dashboard from "./pages/Dashboard";
import Orders from "./pages/Orders";


export default function App() {
  const [mode, setMode] = useState("dark");
  const theme = createTheme(getDesignTokens(mode));
  const [page, setPage] = useState("dashboard");

  return (
    
    <ThemeProvider theme={theme}>
      <CssBaseline />
     
      <Box display="flex">
        <Sidebar setPage={setPage} />
        <Box flex={1} p={2}>
          <Header mode={mode} setMode={setMode} />
          {page === "dashboard" && <Dashboard />}
          {page === "orders" && <Orders />}
        </Box>
      </Box>
      
    </ThemeProvider>
    
    
  );
}
