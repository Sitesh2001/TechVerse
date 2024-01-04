import React from 'react'
import { Layout } from '../Layout/Layout'
import { SubNav } from '../Navbar/SubNav'
import Banner from '../HomeItems/Banner'

const Mobiles = () => {

  const mobile = '/Images/mbanner1.jpg'
  const laptop = '/Images/mbanner2.webp'
  const tablet = '/Images/mbanner3.jpg'
  const tv = '/Images/mbanner4.jpg'
  const watch = '/Images/mbanner5.jpg'
  const BannerImage = [mobile,laptop,tablet,tv,watch]

  return (
   <Layout>
    <SubNav/>
    <Banner images = {BannerImage} />
   </Layout>
  )
}

export default Mobiles