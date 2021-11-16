import React, { useRef } from 'react'
import Footer from "./Footer"
import Navbar from "./Navbar"
import NextImage from "./Image"

const scrollToRef = (ref) => window.scrollTo(0, ref.current.offsetTop)  

const Layout = ({ children }) => {
  const content = useRef(null)
  const executeScroll = () => scrollToRef(content)

  return (
    <div className="flex justify-center bg-gray-200">
      <div className="max-w-screen-lg flex flex-col min-h-screen w-full">
        <Navbar />
        <div style={{position: 'relative', top: -100 + 'px'}}>
          <NextImage 
            src="/lilly-header2.jpg" width={2000} height={1300} alt="Banner"
          />
          <div className="d-flex justify-content-center" style={{position: 'relative', top: -100 + 'px'}}>
            <button className="rounded" onClick={executeScroll} style={{border: 'none', outline: 'inherit'}}>
              <NextImage 
                src="/down-arrow.gif" width={100} height={80} alt="Banner"
              />
            </button>
          
          </div>
          
          <hr ref={content} style={{position: 'relative', top: -30 + 'px'}} />
        <div className="flex-grow">{children}</div>
        
        <Footer />
      </div>
      <div
        hidden
        id="snipcart"
        data-api-key="ODhhNWUxOGEtNTk0OC00OTQwLWJkOWMtM2M1ZmNjODU1ZDJhNjM3MzMyNzM0NjM1OTMyNjcz"
      />
    </div>
    </div>
  )
}

export default Layout
