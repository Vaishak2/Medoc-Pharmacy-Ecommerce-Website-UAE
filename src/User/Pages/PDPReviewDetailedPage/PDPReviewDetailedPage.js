import React from 'react'
import PDPreviewedDetails from '../../Components/PDPreviewedDetails/PDPreviewedDetails'
import ReviewForm from '../../Components/ReviewForm/ReviewForm'

function PDPReviewDetailedPage() {
    return (
        <div>
            <div className='w-[1200px] mx-auto'>
                <PDPreviewedDetails/>
                <ReviewForm/>
            </div>
        </div>
    )
}

export default PDPReviewDetailedPage
