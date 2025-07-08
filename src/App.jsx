import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./App.css";
import Body from "./component/Body/Body";
import Header from "./component/Header/Header";
import { Provider } from "react-redux";
import store from "./ReduxStore/store";
import Mainconatiner from "./component/Body/Mainconatiner";
import Watchpage from "./component/Watchpage/Watchpage";
import SearchResultsPage from "./component/SearchResultPage/SearchResultsPage";

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: (
      <>
        <Header />
        <Body />
      </>
    ),
    children: [
      { path: "/", element: <Mainconatiner /> },
      { path: "/watch", element: <Watchpage /> },
      { path: "/results", element: <SearchResultsPage /> }, 
    ],
  },
]);

function App() {
  return (
    <Provider store={store}>
      <RouterProvider router={appRouter} />
    </Provider>
  );
}

export default App;
