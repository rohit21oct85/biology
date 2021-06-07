import React from 'react'

export default function Cell({left, top, right, bottom}) {
      const position = {
            left: left,
            top: top,
            right: right,
            bottom: bottom
      }
      return (<div className="na " style={position}>Na<sup>+</sup></div>)
}
