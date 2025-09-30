import {Routes} from 'react-router-dom'
import './App.css'
import Layout from './assets/Layout/Layout'
import Home from './assets/Home/Home'

function App() {


  return (
    <>
      <Routes>
      <Route path="/" element={<Layout />}>
      <Route index element={<Home />} />
      <Route path="/alcohol" element={<Alcohol />} />
       <Route path="/citypage" element={<CityPage />} />
       {/* <Route path="/home" element={<Home />} /> */}
      </Route>
    </Routes>







    </>
  )
}

export default App 