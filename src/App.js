import {Routes,Route} from "react-router-dom"
import {MainLayout} from "./layouts";
import {
    LandingPage,
    Auth,
    AdminDashboard,
    List,
    Single,
    New
} from "./routes";


function App() {
  return (
      <>
        <Routes>
          <Route path={"/"}>
              <Route index element={<LandingPage/>}/>
              <Route path={"auth"} element={<Auth/>}/>
              <Route path={"dashboard"} element={<AdminDashboard/>}/>
              <Route path={"users"}>
                  <Route index element={<List/>}/>
                  <Route path={":userId"} element={<Single/>}/>
                  <Route path={"new"} element={<New/>}/>
              </Route>

              <Route path={"products"}>
                  <Route index element={<List/>}/>
                  <Route path={":productId"} element={<Single/>}/>
                  <Route path={"new"} element={<New/>}/>
              </Route>
          </Route>

        </Routes>
      </>

  );
}

export default App;
