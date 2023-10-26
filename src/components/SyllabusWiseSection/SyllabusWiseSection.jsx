import React from 'react'

const SyllabusWiseSection = () => {
  return (
    <div className="border borderRadius10 m-3 ms-5">
                <div className="font700 fontSize16 m-4">
                  Syllabus Wise Analysis
                </div>

                <div className="progressBar m-4">
                  <div className="font400 fontSize16">
                    HTML Tools, Forms, History
                  </div>

                  <div className="mt-2 d-flex justify-content-between align-items-center">
                    {/* Progress Bar */}
                    <div className="borderRadius10 blueProgressBar">
                      <div className="borderRadius10 blueProgressBarFilled"></div>
                    </div>

                    <div className="ms-8 fontColorBlue font700 font16">80%</div>
                  </div>
                </div>

                <div className="progressBar m-4">
                  <div className="font400 fontSize16">
                    Tags & References in HTML
                  </div>

                  <div className="mt-2 d-flex justify-content-between align-items-center">
                    {/* Progress Bar */}
                    <div className="borderRadius10 orangeProgressBar">
                      <div className="borderRadius10 orangeProgressBarFilled"></div>
                    </div>

                    <div className="ms-8 fontColorOrange font700 font16">
                      60%
                    </div>
                  </div>
                </div>

                <div className="progressBar m-4">
                  <div className="font400 fontSize16">Tables & CSS Basics</div>
                  <div className="mt-2 d-flex justify-content-between align-items-center">
                    {/* Progress Bar */}
                    <div className="borderRadius10 redProgressBar">
                      <div className="borderRadius10 redProgressBarFilled"></div>
                    </div>

                    <div className="ms-8 fontColorRed font700 font16">24%</div>
                  </div>
                </div>

                <div className="progressBar m-4">
                  <div className="font400 fontSize16">Tables & CSS Basics</div>
                  <div className="mt-2 d-flex justify-content-between align-items-center">
                    {/* Progress Bar */}
                    <div className="borderRadius10 greenProgressBar">
                      <div className="borderRadius10 greenProgressBarFilled"></div>
                    </div>

                    <div className="ms-8 fontColorGreen font700 font16">
                      96%
                    </div>
                  </div>
                </div>
              </div>
  )
}

export default SyllabusWiseSection