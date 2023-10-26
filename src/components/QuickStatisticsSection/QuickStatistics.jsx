import React from 'react'

const QuickStatistics = ({score}) => {
  return (
    <div
                className="border borderRadius10 mt-4"
                style={{ width: '45vw' }}
              >
                {/* heading */}
                <div className="m-4 fontStyle">Quick Statistics</div>

                {/* Bottom stats */}
                <div className="m-4 d-flex justify-content-between">
                  <div className="m-1 d-flex">
                    <div className="bgColorTrophy h50 w50 borderRadius50 d-flex justify-content-center align-items-center">
                      🏆
                    </div>

                    <div className="ms-3">
                      <div style={{ fontSize: '22px', fontWeight: '700' }}>
                        {score.rank}
                      </div>

                      <div
                        style={{ fontSize: '12px', fontWeight: '400' }}
                        className="mt-1"
                      >
                        YOUR RANK
                      </div>
                    </div>
                  </div>

                  <div className="border m-1 h50 bRNone"></div>

                  <div className="m-1 d-flex ">
                    <div className="bgColorTrophy h50 w50 borderRadius50 d-flex justify-content-center align-items-center">
                      📋
                    </div>

                    <div className="ms-3">
                      <div style={{ fontSize: '22px', fontWeight: '700' }}>
                        {score.percentage}%
                      </div>

                      <div
                        style={{ fontSize: '12px', fontWeight: '400' }}
                        className="mt-1"
                      >
                        PERCENTILE
                      </div>
                    </div>
                  </div>

                  <div className="border m-1 h50 bRNone"></div>

                  <div className="m-1 d-flex">
                    <div className="bgColorTrophy h50 w50 borderRadius50 d-flex justify-content-center align-items-center">
                      ✅
                    </div>

                    <div className="ms-3">
                      <div style={{ fontSize: '22px', fontWeight: '700' }}>
                        {score.correctAnswers} / 15
                      </div>

                      <div
                        style={{ fontSize: '12px', fontWeight: '400' }}
                        className="mt-1"
                      >
                        CORRECT ANSWERS
                      </div>
                    </div>
                  </div>
                </div>
              </div>
  )
}

export default QuickStatistics