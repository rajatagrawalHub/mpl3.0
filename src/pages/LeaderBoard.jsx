import React from 'react'
import Navbar from '../components/Navbar'


export default function Leaderboard() {
  return (
    <div id='Container' className='flex column'>
      <Navbar />
      <div id="bodyContainer" >
        <div id="huntSection" className='flex column'>
          <p className="titleHeadText">Leaderboard</p>
          <div id="clueSection" className='flex row'>
            <div id="leaderboardContainer" className='flex column'>
              <div className="leaderBox flex row">
                <div id='rank1' className="rankBox flex centerVH"><p className="rank">1</p></div>
                <div className="rankDetailBox flex column centerVH">
                  <button className='btn_lite purpleShade'>Team Name</button>
                  <p className="bold">20,000 Pts.</p>
                </div>
              </div>
              <div className="leaderBox flex row">
                <div id='rank2' className="rankBox flex centerVH"><p className="rank">2</p></div>
                <div className="rankDetailBox flex column centerVH">
                  <button className='btn_lite purpleShade'>Team Name</button>
                  <p className="bold">20,000 Pts.</p>
                </div>
              </div>
              <div className="leaderBox flex row">
                <div id='rank3' className="rankBox flex centerVH"><p className="rank">3</p></div>
                <div className="rankDetailBox flex column centerVH">
                  <button className='btn_lite purpleShade'>Team Name</button>
                  <p className="bold">20,000 Pts.</p>
                </div>
              </div>
            </div>
            <div id="leadertableSection">
                <table className='tbl' id='leaderboardtable'>
                  <tr className='headerRow'><th>Rank</th><th>Team Name</th><th>Points</th></tr>
                  <tr><td className='bold'>1</td><td>Team ABC</td> <td>20,000 Points</td></tr>
                  <tr><td className='bold'>1</td><td>Team ABC</td> <td>20,000 Points</td></tr>
                  <tr><td className='bold'>1</td><td>Team ABC</td> <td>20,000 Points</td></tr>
                  <tr><td className='bold'>1</td><td>Team ABC</td> <td>20,000 Points</td></tr>
                  <tr><td className='bold'>1</td><td>Team ABC</td> <td>20,000 Points</td></tr>
                  <tr><td className='bold'>1</td><td>Team ABC</td> <td>20,000 Points</td></tr>
                  <tr><td className='bold'>1</td><td>Team ABC</td> <td>20,000 Points</td></tr>
                  <tr><td className='bold'>1</td><td>Team ABC</td> <td>20,000 Points</td></tr>
                  <tr><td className='bold'>1</td><td>Team ABC</td> <td>20,000 Points</td></tr>
                  <tr><td className='bold'>1</td><td>Team ABC</td> <td>20,000 Points</td></tr>
                  <tr><td className='bold'>1</td><td>Team ABC</td> <td>20,000 Points</td></tr>
                  <tr><td className='bold'>1</td><td>Team ABC</td> <td>20,000 Points</td></tr>
                  <tr><td className='bold'>1</td><td>Team ABC</td> <td>20,000 Points</td></tr>
                  <tr><td className='bold'>1</td><td>Team ABC</td> <td>20,000 Points</td></tr>
                  <tr><td className='bold'>1</td><td>Team ABC</td> <td>20,000 Points</td></tr>
                  <tr><td className='bold'>1</td><td>Team ABC</td> <td>20,000 Points</td></tr>
                  <tr><td className='bold'>1</td><td>Team ABC</td> <td>20,000 Points</td></tr>
                  <tr><td className='bold'>1</td><td>Team ABC</td> <td>20,000 Points</td></tr>
                  <tr><td className='bold'>1</td><td>Team ABC</td> <td>20,000 Points</td></tr>
                </table>
            </div>
            <div id="leadertableSection">
                <table className='tbl' id='leaderboardtable'>
                  <tr className='headerRow'><th>Rank</th><th>Team Name</th><th>Points</th></tr>
                  <tr><td className='bold'>1</td><td>Team ABC</td> <td>20,000 Points</td></tr>
                  <tr><td className='bold'>1</td><td>Team ABC</td> <td>20,000 Points</td></tr>
                  <tr><td className='bold'>1</td><td>Team ABC</td> <td>20,000 Points</td></tr>
                  <tr><td className='bold'>1</td><td>Team ABC</td> <td>20,000 Points</td></tr>
                  <tr><td className='bold'>1</td><td>Team ABC</td> <td>20,000 Points</td></tr>
                  <tr><td className='bold'>1</td><td>Team ABC</td> <td>20,000 Points</td></tr>
                  <tr><td className='bold'>1</td><td>Team ABC</td> <td>20,000 Points</td></tr>
                  <tr><td className='bold'>1</td><td>Team ABC</td> <td>20,000 Points</td></tr>
                  <tr><td className='bold'>1</td><td>Team ABC</td> <td>20,000 Points</td></tr>
                  <tr><td className='bold'>1</td><td>Team ABC</td> <td>20,000 Points</td></tr>
                  <tr><td className='bold'>1</td><td>Team ABC</td> <td>20,000 Points</td></tr>
                  <tr><td className='bold'>1</td><td>Team ABC</td> <td>20,000 Points</td></tr>
                  <tr><td className='bold'>1</td><td>Team ABC</td> <td>20,000 Points</td></tr>
                  <tr><td className='bold'>1</td><td>Team ABC</td> <td>20,000 Points</td></tr>
                  <tr><td className='bold'>1</td><td>Team ABC</td> <td>20,000 Points</td></tr>
                  <tr><td className='bold'>1</td><td>Team ABC</td> <td>20,000 Points</td></tr>
                  <tr><td className='bold'>1</td><td>Team ABC</td> <td>20,000 Points</td></tr>
                  <tr><td className='bold'>1</td><td>Team ABC</td> <td>20,000 Points</td></tr>
                  <tr><td className='bold'>1</td><td>Team ABC</td> <td>20,000 Points</td></tr>
                </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
