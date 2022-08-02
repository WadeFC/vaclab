import {Routes,Route} from "react-router-dom"
import {LandingPage} from "./routes";
import {MainLayout} from "./layouts";

const mainLayoutRoutes = [
    {
        path:"/",
        component: <LandingPage/>
    },
    {
        path:"/about",
        component: <h1>About</h1>
    }
]


function App() {
  return (
      <>
        <Routes>
          {mainLayoutRoutes.map(({path,component})=>
              <Route path={path} element={<MainLayout>{component}</MainLayout>}/>)}
        </Routes>
      </>

  );
}

export default App;
