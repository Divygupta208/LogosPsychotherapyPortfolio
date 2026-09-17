import { Outlet } from 'react-router-dom'
import Header from '../components/layout/Header'
import Footer from '../components/layout/Footer'

export default function Layout() {
  return (
    <div className="flex min-h-screen flex-col bg-[#EFE5D8] text-text-dark font-sans antialiased selection:bg-primary-light selection:text-primary-dark relative">
      <Header />
      <main className="relative z-10 flex-1">
        <Outlet />
      </main>
      <Footer />
    </div>


  )
}

