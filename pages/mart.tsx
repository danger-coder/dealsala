import React from 'react'
import Collection from '../components/Collection'
import BabyCareProducts from '../components/dealsala_mart/BabyCareProducts'
import Banner from '../components/dealsala_mart/Banner'
import Header from '../components/dealsala_mart/Header'
import HomeAppliance from '../components/dealsala_mart/HomeAppliance'
import Navigation from '../components/dealsala_mart/Navigation'
import New_arrivals from '../components/dealsala_mart/New_arrivals'
import Offer from '../components/dealsala_mart/Offer'
import PopularProducts from '../components/dealsala_mart/PopularProducts'
import TopBar from '../components/dealsala_mart/Topbar'
import VacationDeals from '../components/dealsala_mart/VacationDeals'
import Line from '../components/Line'
import RelatedSearch from '../components/RelatedSearch'

type Props = {}

const mart = (props: Props) => {
    return (
        <div>
            <TopBar />
            <Line />
            {/* <Navigation /> */}
            {/* <Banner /> */}
            <Header />
            <Offer />
            <New_arrivals />
            <Collection />
            <HomeAppliance />
            <VacationDeals />
            <BabyCareProducts />
            <HomeAppliance />
            <PopularProducts />
            <RelatedSearch />
        </div>
    )
}

export default mart