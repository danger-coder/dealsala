import React from 'react'
import Banner from '../../components/ecommercembl/Banner'
import EcommerceTopbar from '../../components/ecommercembl/EcommerceTopbar'
import HomeImprovements from '../../components/ecommercembl/HomeImprovements'
import LatestDeals from '../../components/ecommercembl/LatestDeals'
import TopCategories from '../../components/ecommercembl/TopCategories'
import WomenAccessories from '../../components/ecommercembl/WomenAccessories'
import Line from '../../components/Line'
import Sliders from '../../components/mbl_component/Slider'
import TopBar from '../../components/TopBar'
import Banners from '../../components/newecommercedesign/Banners'
import NewCategories from '../../components/newecommercedesign/NewCategories'
import ToolDiy from '../../components/newecommercedesign/ToolDiy'
import FeaturedProducts from '../../components/newecommercedesign/FeaturedProducts'
import Category from '../../components/newecommercedesign/Category'

type Props = {}

let data = [{
    name: "text",
    img: "/../assets/mblview/coat.png"
},
{
    name: "text",
    img: "/../assets/mblview/lamp.png"
},
{
    name: "text",
    img: "/../assets/mblview/coat.png"
},
{
    name: "text",
    img: "/../assets/mblview/coat.png"
}
    ,
{
    name: "text",
    img: "/../assets/mblview/coat.png"
}

]

let data2 = [{
    name: "text",
    img: "/../ecommerce/funiture.png"
},
{
    name: "text",
    img: "/../ecommerce/furniture2.png"
},
{
    name: "text",
    img: "/../ecommerce/furniture3.png"
},
{
    name: "text",
    img: "/../ecommerce/furniture4.png"
}
    ,
{
    name: "text",
    img: "/../ecommerce/funiture.png"
}

]
let data3 = [{
    name: "text",
    img: "/../ecommerce/shoe1.png"
},
{
    name: "text",
    img: "/../ecommerce/shoe2.png"
},
{
    name: "text",
    img: "/../ecommerce/shoe3.png"
},
{
    name: "text",
    img: "/../ecommerce/shoe4.png"
}
    ,
{
    name: "text",
    img: "/../ecommerce/shoe1.png"
}

]
const index = (props: Props) => {
    return (
        <div className='pb-[80px] md:hidden'>
            <EcommerceTopbar />
            <Banners />
            <NewCategories />
            <Category />
            <ToolDiy name='Tools & DIY Crafts' data={data} />
            <FeaturedProducts />
            <ToolDiy name='Furniture & DIY' data={data2} />
            <ToolDiy name='Sport Shoes' data={data3} />
            <ToolDiy name='Title' data={data} />

            {/* <Line />
            <Sliders />
            <TopCategories />
            <LatestDeals />
            <HomeImprovements name={"Home Improvements"} />
            <Banner />
            <HomeImprovements name={"Child Care "} />
            <WomenAccessories /> */}
        </div>
    )
}

export default index