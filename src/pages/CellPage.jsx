import React from 'react'
import Cell from '../components/Cell';
import Na from '../components/Na';

export default function CellPage() {
      return (
            <div id="canvas">
                  <div id="cell">
                        <Cell id="topcell" left="45%" top="5%"/>
                        <Na id="bottomcell" left="38%" top="7%"/>
                        <Cell id="rightcell" left="5%" top="45%"/>
                        <Na id="rightcell" left="8%" top="55%"/>
                        <Cell id="bottomcell" right="45%" bottom="5%"/>
                        <Na id="topcell" right="55%" bottom="5%"/>
                        <Cell id="leftcell" right="5%" bottom="50%"/>
                        <Na id="leftcell"  right="5%" bottom="40%"/>
                  </div>
                  <div className="cell-membrain"></div>
                  <div className="inner-membrain"></div>
            </div>
      )
}
