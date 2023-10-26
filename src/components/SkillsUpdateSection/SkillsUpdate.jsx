import React from 'react'
import htmlIcon from '../../assets/htmlIcon.png'

const SkillsUpdate = ({openModal}) => {
  return (
    <div
    className="skillsUpdateMain border d-flex mt-3 justify-content-between borderRadius10"
    style={{ width: '45vw' }}
  >
    <div className="skillsUpdateLeft m-4 d-flex">
      <img src={htmlIcon} height="40" width="40" />

      <div className="ms-2">
        <div className="fontStyle">HyperText Markup Language</div>

        <div className="fontStyle2 mt-1">
          Questions: 08 | Duration: 15mins | Submitted on 5 June
          2021
        </div>
      </div>
    </div>

    <div className="skillsUpdateRight m-4">
      <button
        style={{
          backgroundColor: '#142683',
          height: '40px',
          width: '120px',
          color: 'white',
          borderRadius: '5px',
          fontSize: '14px',
        }}
        className="pointer"
        onClick={()=>{openModal()}}
      >
        Update
      </button>
    </div>
  </div>
  )
}

export default SkillsUpdate