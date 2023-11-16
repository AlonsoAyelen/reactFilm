import React from "react";
import { RouterProvider } from "react-router-dom";
import { appRouter } from "./core/routes/app_router";
import { AuthProvider } from "./core/auth/provider/auth_provider";

const App = () => {
  return (
    <>
      <AuthProvider>
        <RouterProvider router={appRouter} />
      </AuthProvider>
    </>
  )
}

export default App;

