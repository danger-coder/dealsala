import React from 'react'
import Detail from '../components/realstate_components/rentalproductpage/Detail'
import Header from '../components/realstate_components/rentalproductpage/Header'
import SimilarProducts from '../components/realstate_components/rentalproductpage/SimilarProducts'
import TopBar from '../components/realstate_components/Topbar'
import RelatedSearch from '../components/RelatedSearch'

type Props = {}

const RentalProduct = (props: Props) => {
    return (
        <div>
            <TopBar/>
            <Header/>
            <Detail/>
            <SimilarProducts/>
            <RelatedSearch/>
        </div>
    )
}

export default RentalProduct