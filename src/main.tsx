import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Toaster } from "@/components/ui/sonner"
import AppRouter from './AppRouter/AppRouter.tsx'
import { RouterProvider } from 'react-router-dom'
import './index.css'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={AppRouter} />
    <Toaster />
  </StrictMode>,
)
