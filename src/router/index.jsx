import { BrowserRouter, Routes, Route } from "react-router";
import NotFound from "@pages/NotFound.jsx"

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  )
}

export default Router