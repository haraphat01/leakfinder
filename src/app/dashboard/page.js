"use client"
import ProtectedRoute from '../components/ProtectedRoute';
// import Sidebar from "../components/Sidebar"



export default function Dashboard ()  {
    
    return(
        <ProtectedRoute>
        <div>
          <p>This is dashboard</p>
            {/* <Sidebar/> */}
        </div>
        </ProtectedRoute>
    )
};


