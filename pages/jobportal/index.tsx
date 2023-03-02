import React from 'react'
import FindYourConformHome from '../../components/FindYourConformHome'
import Banner from '../../components/jobprotal_components/Banner'
import BrowseByCategory from '../../components/jobprotal_components/BrowseByCategory'
import FeaturedJobs from '../../components/jobprotal_components/FeaturedJobs'
import JobCategories from '../../components/jobprotal_components/JobCategories'
import JobOpenings from '../../components/jobprotal_components/JobOpenings'
import TopBars from '../../components/jobprotal_components/TopBars'
import TopBar from '../../components/TopBar'
import RelatedSearch from '../../components/RelatedSearch'
import MblTopbar from '../../components/jobprotal_components/MblTopbar'
import Findyourjob from '../../components/jobprotal_components/Findyourjob'

type Props = {}

const index = (props: Props) => {
    return (
        <div>
            <TopBars />
            {/* <TopBar /> */}
            <MblTopbar />
            <Banner />
            <FeaturedJobs />
            <FindYourConformHome />
            <BrowseByCategory />
            <JobOpenings />
            <Findyourjob />
            <JobCategories />
            <RelatedSearch />
        </div>
    )
}

export default index