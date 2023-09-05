import {
  // useParams,
  useRouteLoaderData,
  json,
  redirect,
  defer,
  Await,
} from 'react-router-dom'
import EventItem from '../components/EventItem'
import { Suspense } from 'react'
import EventsList from '../components/EventsList'

const EventDetailPage = () => {
  // const params = useParams()
  const { event, events } = useRouteLoaderData('event-detail')
  return (
    <>
      <Suspense fallback={<p style={{ textAlign: 'center' }}>Loading....</p>}>
        <Await resolve={event}>
          {(loadedEvent) => <EventItem event={loadedEvent} />}
        </Await>
      </Suspense>
      <Suspense>
        <Await resolve={events}>
          {(loadedEvents) => <EventsList events={loadedEvents} />}
        </Await>
      </Suspense>
    </>
  )
}

export default EventDetailPage

const loadEvent = async (id) => {
  const response = await fetch('http://localhost:8080/events/' + id)

  if (!response.ok) {
    throw json(
      { message: 'Could not fetch details for selected event.' },
      { status: 500 }
    )
  } else {
    const resData = await response.json()
    return resData.event
  }
}

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

export const loader = async ({ request, params }) => {
  const id = params.eventId

  return defer({
    event: await loadEvent(id),
    events: loadEvents(),
  })
}

export const action = async ({ request, params }) => {
  const id = params.eventId
  const response = await fetch('http://localhost:8080/events/' + id, {
    method: request.method,
  })
  if (!response.ok) {
    throw json({ message: 'Could not delete event.' }, { status: 500 })
  }

  return redirect('/events')
}
