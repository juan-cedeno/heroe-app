import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { LoginScreen } from '../screens/LoginScreen';
import { DashboardRoute } from './DashboardRoute';

export const AppRouter = () => {
  return (
    <div>
        <BrowserRouter>
        <Routes>
            <Route path="/login" element={<LoginScreen />} />
            <Route path="/*" element={<DashboardRoute />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}
