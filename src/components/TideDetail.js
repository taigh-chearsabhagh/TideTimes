import React from 'react';

const TideDetail = ({tide}) => {
  if(!tide) return null

  return (
    <div className="tide-detail">
    <h3>{tide.name}</h3>
    <p>{tide.id}</p>
    <p>{tide.country}</p>
    </div>
  )
}
export default TideDetail;
