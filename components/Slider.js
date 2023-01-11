import React from 'react'
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';


const slider = () => {
    // var $ = require("jquery");
    // if (typeof window !== "undefined") {
    //     window.$ = window.jQuery = require("jquery");
    // }
    return (
        <div>

            <OwlCarousel className='owl-theme' margin={10} nav>
                <div class='item'>
                    <h4>1</h4>
                </div>
                <div class='item'>
                    <h4>2</h4>
                </div>
                <div class='item'>
                    <h4>3</h4>
                </div>
                <div class='item'>
                    <h4>4</h4>
                </div>
                <div class='item'>
                    <h4>5</h4>
                </div>


            </OwlCarousel>
        </div>
    )
}

export default slider


