import React from 'react'
import EventsNavigation from './EventNavication'
import { Outlet } from 'react-router-dom'

const EventLayout = () => {
  return (
    <>
      <EventsNavigation />
      <Outlet />
    </>
  );
};

export default EventLayout;