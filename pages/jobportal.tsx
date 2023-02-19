import React from 'react'
import FindYourConformHome from '../components/FindYourConformHome'
import Banner from '../components/jobprotal_components/Banner'
import BrowseByCategory from '../components/jobprotal_components/BrowseByCategory'
import FeaturedJobs from '../components/jobprotal_components/FeaturedJobs'
import JobCategories from '../components/jobprotal_components/JobCategories'
import JobOpenings from '../components/jobprotal_components/JobOpenings'
import TopBar from '../components/jobprotal_components/Topbar'
import RelatedSearch from '../components/RelatedSearch'

type Props = {}

const Jobportal = (props: Props) => {
    return (
        <div>
            <TopBar />
            <Banner />
            <FeaturedJobs />
            <FindYourConformHome />
            <BrowseByCategory />
            <JobOpenings />
            <JobCategories />
            <RelatedSearch />
        </div>
    )
}

export default Jobportal