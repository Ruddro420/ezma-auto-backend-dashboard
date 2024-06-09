
import { Outlet } from 'react-router-dom';
import NavBar from './components/NavBar/NavBar';

function App() {
  return (
    <>
      <div>
        <body className="bg-gray-100">
          {/* #################### NavBar Start #################### */}
          <NavBar />


          {/* ################ Main Data Start ################ */}
          <Outlet />
        </body>
      </div>
    </>
  )
}

export default App
