import { Suspense } from 'react'
import EventsList from '../components/EventsList'
import { useLoaderData, json, defer, Await } from 'react-router-dom'

function EventsPage() {
  const { events } = useLoaderData()

  // if (data.isError) {
  //   return <p>{data.message}</p>
  // }

  return (
    <Suspense fallback={<p style={{ textAlign: 'center' }}>Loading....</p>}>
      <Await resolve={events}>
        {(loadedEvents) => <EventsList events={loadedEvents} />}
      </Await>
    </Suspense>
  )
}

export default EventsPage

const loadEvents = async () => {
  const response = await fetch('http://localhost:8080/events')

  if (!response.ok) {
    // return { isError: true, message: 'Colud not fetch events.' }
    // throw new Response(JSON.stringify({ message: 'Colud not fetch events.' }), {
    //   status: 500,
    // })
    throw json({ message: 'Colud not fetch events.' }, { status: 500 })
  } else {
    const resData = await response.json()
    return resData.events
  }
}

export const loader = () => {
  return defer({
    events: loadEvents(),
  })
}
