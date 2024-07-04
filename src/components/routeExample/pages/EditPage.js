import React from 'react'
import EventForm from '../components/EventForm'
import { useRouteLoaderData } from 'react-router-dom'

const EditPage = () => {
  //eventDetail
  const eventDetail = useRouteLoaderData();

  return (
    <EventForm method='patch' />
  )
}

export default EditPage