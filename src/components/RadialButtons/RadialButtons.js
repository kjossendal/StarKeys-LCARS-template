import React from 'react'
import './RadialButtons.css'

const RadialButtons = ({ buttonData, id, onClick }) => {

  const handleFragClick = React.useCallback((macrostring) => {
    onClick(macrostring)
    // console.log("EE", e.target.getAttribute('name'))
  }, [onClick])

  React.useEffect(() => {
    const createPie = (cx, cy, r, slices) => {

      var fromAngle, toAngle,
        fromCoordX, fromCoordY,
        toCoordX, toCoordY,
        path, d;

      // for (var i = 0; i < slices; i++) {
      buttonData.forEach((btn, i) => {
        // create container
        const fragment = document.createElementNS("http://www.w3.org/2000/svg", 'g')

        // create pie slice element
        path = document.createElementNS("http://www.w3.org/2000/svg", "path");
        // do all the maths to draw slice
        fromAngle = i * 360 / slices;
        toAngle = (i + 1) * 360 / slices;
        //console.log(fromAngle + ' ' + toAngle);
        fromCoordX = cx + (r * Math.cos(fromAngle * Math.PI / 180));
        fromCoordY = cy + (r * Math.sin(fromAngle * Math.PI / 180));
        toCoordX = cx + (r * Math.cos(toAngle * Math.PI / 180));
        toCoordY = cy + (r * Math.sin(toAngle * Math.PI / 180));
        d = 'M' + cx + ',' + cy + ' L' + fromCoordX + ',' + fromCoordY + ' A' + r + ',' + r + ' 0 0,1 ' + toCoordX + ',' + toCoordY + 'z';
        // console.log(d);
        // build path element
        path.setAttributeNS(null, "d", d);
        path.setAttribute('name', i)
        path.classList.add('frag')
        path.onclick = () => handleFragClick(buttonData[i].macro)

        fragment.appendChild(path)
        document.getElementById(id).appendChild(fragment);
      })

      // add center black circle
      const fragment = document.createElementNS("http://www.w3.org/2000/svg", 'g')
      const center = document.createElementNS('http://www.w3.org/2000/svg', "circle");
      center.setAttributeNS(null, "cx", 55);
      center.setAttributeNS(null, "cy", 55);
      center.setAttributeNS(null, 'r', 20)
      center.classList.add('center')
      // add text to center circle
      const text = document.createElementNS("http://www.w3.org/2000/svg", 'text')
      // text.setAttributeNS(null, 'textAnchor', 'middle')
      // place text based on rotation compensation
      if (slices === 4) {
        text.setAttributeNS(null, 'x', '-11%')
        text.setAttributeNS(null, 'y', '-65%')
        text.setAttributeNS(null, "transform", "rotate(135)")
        text.onclick = () => handleFragClick('macro:32')
        text.innerHTML = 'RESET'
      }
      if (slices === 3) {
        text.setAttributeNS(null, 'x', '-29%')
        text.setAttributeNS(null, 'y', '-63%')
        text.setAttributeNS(null, "transform", "rotate(149)")
        text.onclick = () => handleFragClick('macro:7')
        text.innerHTML = 'RESET'
      }
      text.setAttributeNS(null, "name", "center")
      text.classList.add('center_text')

      fragment.appendChild(center)
      fragment.appendChild(text)

      document.getElementById(id).appendChild(fragment)
    }

    createPie(55, 55, 50, buttonData.length);
  }, [buttonData, buttonData.length, handleFragClick, id])

  return (
    <svg viewBox="0 0 110 110" id={id} shapeRendering="geometricPrecision"></svg>
  )
  // return (
  //   <svg width="300" height="300" viewBox="-2 -2 202 203" shapeRendering="geometricPrecision">
  //     <a xlinkHref="#" onClick={() => alert(1)}>
  //       <path className="frag" d="M100,100 v-100 a100,100 1 0,1 99.6025,90" />
  //       <text x="135" y="42.5" textAnchor="middle">1</text>
  //     </a>
  //     {/* <a xlinkHref="#">
  //       <path className="frag" d="M100,100 l86.6025,-50 a100,100 1 0,1 0,100" />
  //       <text x="170" y="105" textAnchor="middle">2</text>
  //     </a> */}
  //     <a xlinkHref="#"><path className="frag" d="M100,100 l86.6025,50 a100,100 1 0,1 -86.6025,50" /><text x="135" y="170" textAnchor="middle">3</text></a>
  //     <a xlinkHref="#"><path className="frag" d="M100,100 v100 a100,100 1 0,1 -86.6025,-50" /><text x="65" y="170" textAnchor="middle">4</text></a>
  //     <a xlinkHref="#"><path className="frag" d="M100,100 l-86.6025,50 a100,100 1 0,1 0,-100" /><text x="27.5" y="105" textAnchor="middle">5</text></a>
  //     <a xlinkHref="#"><path className="frag" d="M100,100 l-86.6025,-50 a100,100 1 0,1 86.0025,-50" /><text x="65" y="42.5" textAnchor="middle">6</text></a>
  //     <a xlinkHref="#"><path className="center" d="M100,100 v-50 a50,50 1 0,1 0,100 a50,50 1 0,1 0,-100" /></a>
  //   </svg>
  // )
}

export default RadialButtons
