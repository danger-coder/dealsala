import React from 'react'
import Banner from '../../components/ecommercembl/Banner'
import HomeImprovements from '../../components/ecommercembl/HomeImprovements'
import LatestDeals from '../../components/ecommercembl/LatestDeals'
import TopCategories from '../../components/ecommercembl/TopCategories'
import WomenAccessories from '../../components/ecommercembl/WomenAccessories'
import Line from '../../components/Line'
import Sliders from '../../components/mbl_component/Slider'
import TopBar from '../../components/TopBar'

type Props = {}

const index = (props: Props) => {
    return (
        <div className='pb-[80px]'>
            <TopBar />
            <Line />
            <Sliders />
            <TopCategories />
            <LatestDeals />
            <HomeImprovements name={"Home Improvements"} />
            <Banner />
            <HomeImprovements name={"Child Care "} />
            <WomenAccessories />
        </div>
    )
}

export default index