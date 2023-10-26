import React from 'react'
import { CircularProgressbar } from 'react-circular-progressbar'
import 'react-circular-progressbar/dist/styles.css'

const QuestionAnalysis = ({percentage}) => {

  

  return (
    <div className="border borderRadius10 m-3 ms-5 mt-4">
      <div className="d-flex justify-content-between m-4">
        <div className="font700 fontSize16">Question Analysis</div>

        <div className="font700 fontSize16 fontColorBlue">07 / 15</div>
      </div>

      <div className="fontSize14 m-4">
        <span className="font700">
          You scored 7 question correct out of 15.{' '}
        </span>
        <span>However it still needs some improvements</span>
      </div>

      <div className="roundChart m-4 d-flex justify-content-center">
        <Example label="Default">
          <CircularProgressbar value={percentage} text={`🎯`} />
        </Example>
      </div>
    </div>
  )
}


function Example(props) {
    return (
      <div >
        <div className='d-flex justify-content-center'>
          <div style={{ width: '60%'}}>{props.children}</div>
        
        </div>
      </div>
    )
  }

export default QuestionAnalysis
