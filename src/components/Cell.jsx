import React from 'react'

export default function Cell({id, left, top, right, bottom}) {
      const position = {
            left: left,
            top: top,
            right: right,
            bottom: bottom
      }
      return (<div id={`${id}`} className="cl1" style={position}>Cl<sup>-</sup></div>)
}
