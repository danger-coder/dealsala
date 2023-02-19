import React from 'react'
import Header from '../components/realstate_components/propertydetailpage/Header'
import SimilarProducts from '../components/realstate_components/rentalproductpage/SimilarProducts'

import TopBar from '../components/realstate_components/Topbar'
import RelatedSearch from '../components/RelatedSearch'

type Props = {}

const propertyDetail = (props: Props) => {
    return (
        <div>
            <TopBar />
            <Header />
            <SimilarProducts/>
            <RelatedSearch/>
        </div>
    )
}

export default propertyDetail