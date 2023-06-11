import { Navigate, useRoutes } from 'react-router-dom';

// layouts
import DashboardLayout from '../layouts/dashboard';
//
import {
  // Dashboard: General
  GeneralAppPage,
  GeneralAnalyticsPage,
} from './elements';

// ----------------------------------------------------------------------

export default function Router() {
  return useRoutes([
        // Dashboard
        {
          path: 'dashboard',
          element: <DashboardLayout />,
          children: [
            { element: <Navigate to="/dashboard/app" replace />, index: true },
            { path: 'app', element: <GeneralAppPage /> },
            { path: 'analytics', element: <GeneralAnalyticsPage /> },
          ],
        },
        // Main Page
        { path: '*', element: <Navigate to="/dashboard/app" replace /> },
      ])
}