import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./App.css";
import Body from "./component/Body/Body";
import Header from "./component/Header/Header";
import { Provider } from "react-redux";
import store from "./ReduxStore/store";
import { lazy, Suspense } from "react";
import Shimmer from "./component/shimmer/Shimmer";

const Mainconatiner = lazy(() => import("./component/Body/Mainconatiner"));
const Watchpage = lazy(() => import("./component/Watchpage/Watchpage"));
const SearchResultsPage = lazy(() => import("./component/SearchResultPage/SearchResultsPage"));

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
      {
        path: "/",
        element: (
          <Suspense fallback={<Shimmer />}>
            <Mainconatiner />
          </Suspense>
        ),
      },
      {
        path: "/watch",
        element: (
          <Suspense fallback={<Shimmer />}>
            <Watchpage />
          </Suspense>
        ),
      },
      {
        path: "/results",
        element: (
          <Suspense fallback={<Shimmer />}>
            <SearchResultsPage />
          </Suspense>
        ),
      },
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
