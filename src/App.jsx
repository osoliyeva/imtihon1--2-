import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import Question from "./pages/Questions";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Home />,
    },
    {
        path: "question/:id",
        element: <Question />,
    },
]);

function App() {
    return <RouterProvider router={router} />;
}

export default App;
