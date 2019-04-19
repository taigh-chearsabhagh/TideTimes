import React from 'react';

const TideSelector = (props) => {

  const options = props.tides.map((tide, index) => {
    return (
      <option value={index} key={index}>{tide.PROPERTY}</option>
    )
  })
  function handleChange(event){
    props.onTideSelected(event.target.value)
  }

  return (
    <select id="tide-selector" defaultValue="default" onChange={handleChange}>
    <option disabled value="default">Choose a....</option>
    {options}
    </select>
  )
}

export default TideSelector;
