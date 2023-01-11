import React from 'react'
import { motion } from "framer-motion"
const RelatedSearch = () => {
    return (
        <div>
            <div className='container mx-auto pt-[28px] pb-[138px] ' >
                <h2 className='text-[#0E1133] text-[25px] leading-[38px] font-medium tracking-[0.02em]'>Related Search</h2>
                <div className='grid grid-cols-4 gap-[66px] mt-[10px] font-[400] '>
                    <motion.div
                        initial={{
                            opacity: 0,
                            y: 100
                        }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1 }}
                        viewport={{ once: true }}
                    >
                        <p className='text-[#0E1133] opacity-[0.8] underline font-[400] text-[12px] leading-[171.5%]'>ivo Y20 | Oppo A12 | Samsung Galaxy M31, iPhone 12, Redmi 9A, Poco F3, Samsung M12, Oppo F19 Pro, Samsung A32, Infinix Hot 10, Samsung A12, OnePlus Nord 2, Samsung M62, Samsung M32, TVS Ntorq, Poco X3 Pro, Poco C3, Acer Nitro 5, Samsung F22, MI 11 Lite, Gold, Macbook Air, iPad Pro, Lenovo Legion 5, Acer Aspire 5, Ideapad 3, HP Pavilion 15, Khukri Rum, Micromax In Note 1, Realme 9i, Realme 9 Pro+, Gas Geyser, Black Horse, Cactus Toy, Antigen Testkit, PS5, Electric Scooter, Z Flip 3, Tab S6, Tab A8, Stealth 13</p>
                    </motion.div>
                    <motion.div
                        initial={{
                            opacity: 0,
                            y: 200
                        }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1.2 }}
                        viewport={{ once: true }}
                    >
                        <p className='text-[#0E1133] underline opacity-[0.8]  text-[12px] leading-[171.5%]'> ivo Y20, Oppo A12, Samsung Galaxy M31, iPhone 12, Redmi 9A, Poco F3, Samsung M12, Oppo F19 Pro, Samsung A32, Infinix Hot 10, Samsung A12, OnePlus Nord 2, Samsung M62, Samsung M32, TVS Ntorq, Poco X3 Pro, Poco C3, Acer Nitro 5, Samsung F22, MI 11 Lite, Gold, Macbook Air, iPad Pro, Lenovo Legion 5, Acer Aspire 5, Ideapad 3, HP Pavilion 15, Khukri Rum, Micromax In Note 1, Realme 9i, Realme 9 Pro+, Gas Geyser, Black Horse, Cactus Toy, Antigen Testkit, PS5, Electric Scooter, Z Flip 3, Tab S6, Tab A8, Stealth 13</p>
                    </motion.div>
                    <motion.div
                        initial={{
                            opacity: 0,
                            y: 250
                        }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1.3 }}
                        viewport={{ once: true }}
                    >
                        <p className='text-[#0E1133] underline opacity-[0.8] t text-[12px] leading-[171.5%]'>ivo Y20, Oppo A12, Samsung Galaxy M31, iPhone 12, Redmi 9A, Poco F3, Samsung M12, Oppo F19 Pro, Samsung A32, Infinix Hot 10, Samsung A12, OnePlus Nord 2, Samsung M62, Samsung M32, TVS Ntorq, Poco X3 Pro, Poco C3, Acer Nitro 5, Samsung F22, MI 11 Lite, Gold, Macbook Air, iPad Pro, Lenovo Legion 5, Acer Aspire 5, Ideapad 3, HP Pavilion 15, Khukri Rum, Micromax In Note 1, Realme 9i, Realme 9 Pro+, Gas Geyser, Black Horse, Cactus Toy, Antigen Testkit, PS5, Electric Scooter, Z Flip 3, Tab S6, Tab A8, Stealth 13</p>
                    </motion.div>
                    <motion.div
                        initial={{
                            opacity: 0,
                            y: 300
                        }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1.4 }}
                        viewport={{ once: true }}
                    >
                        <p className='text-[#0E1133] underline opacity-[0.8]  text-[12px] leading-[171.5%]'>ivo Y20, Oppo A12, Samsung Galaxy M31, iPhone 12, Redmi 9A, Poco F3, Samsung M12, Oppo F19 Pro, Samsung A32, Infinix Hot 10, Samsung A12, OnePlus Nord 2, Samsung M62, Samsung M32, TVS Ntorq, Poco X3 Pro, Poco C3, Acer Nitro 5, Samsung F22, MI 11 Lite, Gold, Macbook Air, iPad Pro, Lenovo Legion 5, Acer Aspire 5, Ideapad 3, HP Pavilion 15, Khukri Rum, Micromax In Note 1, Realme 9i, Realme 9 Pro+, Gas Geyser, Black Horse, Cactus Toy, Antigen Testkit, PS5, Electric Scooter, Z Flip 3, Tab S6, Tab A8, Stealth 13</p>
                    </motion.div>
                </div>
            </div>
        </div>
    )
}

export default RelatedSearch