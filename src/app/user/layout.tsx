import { Container } from 'react-bootstrap'
import React from 'react'
import SidebarProvider from '@/components/Layout/SidebarProvider'
import SidebarOverlay from '@/components/Layout/Sidebar/SidebarOverlay'
import Sidebar from '@/components/Layout/Sidebar/Sidebar'
import SidebarNav from '@/components/Layout/Sidebar/SidebarNav'
import Header from '@/components/Layout/Header/Header'
import Footer from '@/components/Layout/Footer/Footer'

export default function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <SidebarProvider>
      <SidebarOverlay />
      <Sidebar>
        <SidebarNav />
      </Sidebar>

      <div className="wrapper d-flex flex-column min-vh-100">
        <Header />

        <div className="body flex-grow-1 px-sm-2 mb-4">
          <Container fluid="lg">
            {children}
          </Container>
        </div>

        <Footer />
      </div>

      <SidebarOverlay />
    </SidebarProvider>
  )
}
