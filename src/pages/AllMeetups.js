import { useState } from 'react'

import MeetupList from '../components/meetups/MeetupList'

function AllMeetupsPage() {
    const [isLoading, setIsLoading] = useState(true);
    const [loadingMeetups, setLoadedMeetups] = useState([]);

    fetch(
        'https://react-getting-started-bfac2-default-rtdb.firebaseio.com/meetups.json'
    ).then(response => {
        return response.json
    }).then(data => {
        setIsLoading(false)
        setLoadedMeetups(data)
    });

    if(isLoading){
        return (
            <section>
                <p>Loading...</p>
            </section>
        )
    }

    return (
        <seletion>
            <h1>All Meetups</h1>
            <MeetupList meetups={loadingMeetups} />
        </seletion>
    )
}

export default AllMeetupsPage
