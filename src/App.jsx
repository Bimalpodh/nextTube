import { Route, Router, RouterProvider, Routes } from "react-router-dom";
import "./App.css";
import Body from "./component/Body/Body";
import Header from "./component/Header/Header";
import { Provider } from "react-redux";
import store from "./ReduxStore/store";
import { createBrowserRouter } from "react-router-dom";
import Mainconatiner from "./component/Body/Mainconatiner";
import Watchpage from "./component/Watchpage/Watchpage";

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <Body />,
    children: [
      {
        path: "/",
        element: <Mainconatiner />,
      },
      {
        path: "/watch",
        element: <Watchpage/>,
      },
    ],
  },
]);

function App() {
  return (
    <Provider store={store}>
      <div className="flex fixed flex-col ">
        <Header />
        <RouterProvider router={appRouter}></RouterProvider>
      </div>
    </Provider>
  );
}

export default App;

{
  /* 

  # Header
  # Body
  #   sidebar
       
  */
}
