import { Routes, Route } from "react-router-dom";
import Layout from "./layout";
import HomePage from "./pages/HomePage";
import CalcPage from "./pages/CalcPage";
import TodoPage from "./pages/TodoPage";
import NonePage from "./pages/NonePage";
import WheatherPage from "./pages/WheatherPage";

const App = () => {

  return (
    <Routes>
      <Route  element={<Layout/>}>
        <Route path="/" element={<HomePage/>}/>
        <Route path="/calc" element={<CalcPage/>}/>
        <Route path="/todo" element={<TodoPage/>}/>
        <Route path="/wheather" element={<WheatherPage/>}/>
        <Route path="/none" element={<NonePage/>}/>
      </Route>
    </Routes>
  )
}

export default App;