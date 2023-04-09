import React from 'react'
import { useState, useEffect } from "react";
import Header from "../components/popular/Header";
import UpcomingBanner from '../components/upcoming/UpcomingBanner';

const UpcomingMovies = () => {

  return (
    <>
      <Header />
      <UpcomingBanner />
      <div>UpcomingMovies</div>

    </>
  )
}

export default UpcomingMovies