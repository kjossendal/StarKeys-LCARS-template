import React from 'react'
import AppSvg from './AppSvg'
import './Demo.css';

const Demo = () => {
  return (
    <div>
      {/* <div id="header">
        <div id="endcap_left_header">
          <AppSvg name="icon_endcap_left" height={30} width={45} />
        </div>
        <div id="block_header" class="blocktext_black">
        </div>
        <div id="headline_header">hmt3design.com</div>
        <div id="endcap_right_header">
          <AppSvg name="icon_endcap_right" height={30} width={45} />
        </div>
      </div> */}
      <br />
      <div id="main">
        <div id="main_top">
          <div id="elbow_left_top_main">
            <AppSvg name="icon_elbow_left_top" height={90} width={300} color="var(--cream)" />
          </div>
          <div id="block_main">
          </div>
          <div id="headline_main">Main menu</div>
          <div id="endcap_right_main">
            <AppSvg name="icon_endcap_right" height={30} width={45} color="var(--cream)" />
          </div>
        </div>
        <div id="main_center">
          <div id="main_buttons">
            <div id="main_button_column">
              <button class="button01">031306</button>
              <button class="button01">gndn</button>
              <button class="button01">062207</button>
            </div>
            <div id="main_button_block">
            </div>
          </div>
          <div id="main_text" class="text">
            <h1>LCARS CSS Grid</h1>
            <p>Based on the Star Trek: The Next Generation LCARS (Library Catalog and Retrieval System) computer
            interface created by Michael Okuda. I also got the specifications from LCARS47.com for the shape
                specifications and color palettes, modifying the dimensions to be a bit more rounded.</p>
            <p>This design makes use of CSS Grid and SVG to recreate the designs in an HMTL document. The odd shapes
            (endcaps, elbows, etc.) are created as SVGs using Adobe Illustrator. The responsive layout and design is
            possible through the flexibility of CSS Grid. Resizing the window will show that the horizontal and
                vertical block elements resize to fit the space. </p>
            <p>There is still some work to be done on device sizing, and eventually I hope to make a WordPress template
                out of it, But for now, this will do.</p>
          </div>
        </div>
        <div id="main_bottom">
          <div id="elbow_left_bottom_main">
            <AppSvg name="icon_elbow_left_bottom" height={'100%'} width={300} />
          </div>
          <div id="block_main_bottom">
          </div>
          <div id="endcap_right_main_bottom">
            <AppSvg name="icon_endcap_right" height={30} width={45} />
          </div>

        </div>
      </div>
    </div>
  )
}

export default Demo
