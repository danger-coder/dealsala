import React from 'react'
import FindYourConformHome from '../components/FindYourConformHome'
import FeaturedProperties from '../components/realstate_components/FeaturedProperties'
import Header from '../components/realstate_components/Header'
import MostSearchedLocation from '../components/realstate_components/MostSearchedLocation'
import OurAgents from '../components/realstate_components/OurAgents'
import PropertyForRent from '../components/realstate_components/PropertyForRent'
import PropertyForSell from '../components/realstate_components/PropertyForSell'
import Slider from '../components/realstate_components/Slider'
import RelatedSearch from '../components/RelatedSearch'

const RealState = () => {
    return (
        <div>
            <Header />
            <FeaturedProperties />
            <FindYourConformHome />
            <PropertyForRent />
            <PropertyForSell />
            <Slider />
            <MostSearchedLocation />
            <OurAgents />
            <RelatedSearch />

        </div>
    )
}

export default RealState 