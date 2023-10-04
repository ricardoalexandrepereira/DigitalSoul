import React from 'react'
import CountUp from 'react-countup'

const MyCountup = ({start,end,duration}) => {
  return (
    <CountUp start={start} end={end} duration={duration}/>
  )
}

export default MyCountup