import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import App from './App';

import { store } from './redux/store';

//ctr + j - terminal
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
<BrowserRouter>
   <Provider store={store}>
      <App />
   </Provider>
   
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
