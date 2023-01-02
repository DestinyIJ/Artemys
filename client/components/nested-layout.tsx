import React, { ReactElement } from 'react';
import Footer from './Footer';
import Newsletter from './Newsletter'

interface LayoutProps {
  children: ReactElement
}

const NestedLayout = ({children}: LayoutProps)=> {
  return (
    <>
      {children}
      <Newsletter />
      <Footer />
    </>
  )
}

export default NestedLayout