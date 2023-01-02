import React, { ReactElement, useEffect } from 'react'
import { Layout, NestedLayout, Header } from '../../components'
import { NextPageWithLayout } from '../_app'
import { useAppContext } from '../_AppContext'


const Page: NextPageWithLayout = () => {

    return (
        <>
            <Header title="Artemys | Auctions" />
            
            <div>Auctions</div>
        </>
    )
}
  
Page.getLayout = function getLayout(page: ReactElement) {
    return (
        <Layout>
        <NestedLayout>{page}</NestedLayout>
        </Layout>
    )
}

export default Page
  

