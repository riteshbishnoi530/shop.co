import AlsoLike from '@/components/AlsoLike'
import Footer from '@/components/common/Footer'
import Header from '@/components/common/Header'
import ProductView from '@/components/ProductView'
import Reviwes from '@/components/Reviwes'
import React from 'react'

function page() {
  return (
    <>
    <Header/>
    <ProductView/>
    <Reviwes/>
    <AlsoLike/>
    <Footer/>
    </>
  )
}

export default page