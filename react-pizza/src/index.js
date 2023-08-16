import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App';

//ctr + j - terminal
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
<BrowserRouter>
   <App />
</BrowserRouter>
);
// const router = createBrowserRouter([
//     {
//       path: "/",
//       element: <App />,
//       errorElement: <NotFound />,
//       children: [
//         {
//           index: true,
//           element: <Home />,
//         },
//         {
//           path: "cart",
//           element: <Cart />,
//         },
//         {
//           path: "*",
//           element: <NotFound />,
//         },
//       ],
//     },
//   ]);
