import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import './App.css';
import AccountCreation from './pages/Home/AccountCreation';
import Home from './pages/Home/Home';
import Login from './pages/Home/Login';
import Register from './pages/Home/Register';
import Root from './Root';

import AccountDetails from './pages/UserDashboard/AccountDetails';
import TransactionHistory from './pages/UserDashboard/TransactionHistory';
import UserDashboard from './pages/UserDashboard/UserDashboard';
import UserProfile from './pages/UserDashboard/UserProfile';

import AddBeneficiary from './pages/FundTransfer/AddBeneficiary';
import DisplayBeneficiary from './pages/FundTransfer/DisplayBeneficiary';
import IMPSPayment from './pages/FundTransfer/impsPayment';
import NEFTPayment from './pages/FundTransfer/neftPayment';
import RTGSPayment from './pages/FundTransfer/RTGSPayment';

import Admin from './pages/Admin/Admin';
import AdminDashboard from './pages/Admin/AdminDashboard';
import AdminStatus from './pages/Admin/AdminStatus';
import AdminTransaction from './pages/Admin/AdminTransaction';

function App() {

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Root />,
      children: [
        {
          path: "home",
          element: <Home />
        },
        {
          path: "login",
          element: <Login />
        },
        {
          path: "register",
          element: <Register />
        },
        {
          path: "accountCreation",
          element: <AccountCreation />
        },
        {
          path: "userDashboard",
          element: <UserDashboard />
        },
        {
          path: "accountDetails",
          element: <AccountDetails />
        },
        {
          path: "transactionHistory",
          element: <TransactionHistory />
        },
        {
          path: "userProfile",
          element: <UserProfile />
        },
        {
          path: "addBeneficiary",
          element: <AddBeneficiary />
        },
        {
          path: "displayBeneficiary",
          element: <DisplayBeneficiary />

        },
        {
          path: "imps",
          element: <IMPSPayment />
        },
        {
          path: "neft",
          element: <NEFTPayment />
        },
        {
          path: "rtgs",
          element: <RTGSPayment />
        },
        {
          path: "admin/",
          element: <Admin />,
          children: [
            {
              path: "adminDashboard",
              element: <AdminDashboard />
            },
            {
              path: "adminStatus",
              element: <AdminStatus />
            },
            {
              path: "adminTransaction",
              element: <AdminTransaction />
            }
          ]
        }

      ],
    },
  ]);

  return (
    <RouterProvider router={router} />
    //   
  )
}

export default App;
