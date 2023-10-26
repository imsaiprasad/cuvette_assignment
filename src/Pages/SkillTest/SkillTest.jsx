import React from 'react'
import NavBar from '../../components/NavBar/NavBar.jsx'
import SideNavBar from '../../components/SideNav/SideNavBar.jsx'
import './SkillTest.css'
import QuestionAnalysis from '../../components/CircularProgressBar/QuestionAnalysis.jsx'
import { useState } from 'react'
import SyllabusWiseSection from '../../components/SyllabusWiseSection/SyllabusWiseSection.jsx'
import QuickStatistics from '../../components/QuickStatisticsSection/QuickStatistics.jsx'
import SkillsUpdate from '../../components/SkillsUpdateSection/SkillsUpdate.jsx'
import Modal from 'react-modal'
import htmlIcon from '../../assets/htmlIcon.png'


const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    width: '50vw',
    height: '50vh',
  },
}

Modal.setAppElement('#root')

const SkillTest = () => {
  

  const [score,setScore]=useState({
rank:12890,
percentage:37,
correctAnswers:7

  })


  let subtitle
  const [modalIsOpen, setIsOpen] = useState(false)

  function openModal() {
    setIsOpen(true)
  }

  function afterOpenModal() {
    // references are now sync'd and can be accessed.
    subtitle.style.color = '#f00'
  }

  function closeModal() {
    setIsOpen(false)
  }

  function handleData(e) {
    closeModal()

  }

  function changeData(event)
  {
    const { name, value } = event.target;
    setScore((score) => ({
      ...score,
      [name]: value,
    }));

  }

  console.log("idx",score)

  return (
    <div>
      <NavBar />

      <div className="d-flex">
        <SideNavBar />

        {/* Main Parent Body Container */}
        <div className="container m-4 ms-5">
          <div
            className="title"
            style={{ fontSize: '12px', fontWeight: '400' }}
          >
            Skill Test
          </div>

          {/* Sub Main Container */}
          <div className="sectionsContainer d-flex">
            {/* Sub Main Left */}
            <div>
              {/* Skills Update Section */}
              <SkillsUpdate openModal={openModal} />

              {/* Quick Statistics Section */}
              <QuickStatistics  score={score} />

              <div className="border borderRadius10 mt-4">
                {/* Head Part */}
                <div className="d-flex justify-content-between align-items-center">
                  <div className="m-4 width500">
                    <div className="font700 fontSize16">Comparison Graph</div>

                    <div className="font400 fontSize14 mt-3">
                      <span className="font700">You scored 37% percentile</span>
                      <span> </span>
                      which is lower than the average percentile 72% of all the
                      engineers who took this assessment
                    </div>
                  </div>

                  <div className="m-4">
                    <div className="borderRadius50 h50 w50 bgColorTrophy d-flex justify-content-center align-items-center">
                      📈
                    </div>
                  </div>
                </div>

                {/* Chart Part */}
                <div>
                  <svg
                    width="657"
                    height="345"
                    viewBox="0 0 657 345"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <rect
                      x="0.5"
                      y="0.5"
                      width="656"
                      height="306"
                      rx="9.5"
                      stroke="#F7F8FA"
                    />
                    <rect
                      opacity="0.1"
                      x="130"
                      width="125"
                      height="307"
                      fill="#438AF6"
                    />
                    <path
                      d="M4.164 341.144C3.42 341.144 2.776 340.964 2.232 340.604C1.696 340.236 1.284 339.728 0.996 339.08C0.708 338.424 0.564 337.664 0.564 336.8C0.564 335.936 0.708 335.18 0.996 334.532C1.284 333.876 1.696 333.368 2.232 333.008C2.776 332.64 3.42 332.456 4.164 332.456C4.908 332.456 5.548 332.64 6.084 333.008C6.62 333.368 7.032 333.876 7.32 334.532C7.608 335.18 7.752 335.936 7.752 336.8C7.752 337.664 7.608 338.424 7.32 339.08C7.032 339.728 6.62 340.236 6.084 340.604C5.548 340.964 4.908 341.144 4.164 341.144ZM4.164 340.256C4.652 340.256 5.088 340.12 5.472 339.848C5.864 339.568 6.168 339.172 6.384 338.66C6.608 338.14 6.72 337.52 6.72 336.8C6.72 336.08 6.608 335.464 6.384 334.952C6.168 334.44 5.864 334.048 5.472 333.776C5.088 333.496 4.652 333.356 4.164 333.356C3.668 333.356 3.228 333.496 2.844 333.776C2.46 334.048 2.156 334.44 1.932 334.952C1.708 335.464 1.596 336.08 1.596 336.8C1.596 337.52 1.708 338.14 1.932 338.66C2.156 339.172 2.46 339.568 2.844 339.848C3.228 340.12 3.668 340.256 4.164 340.256ZM10.4803 336.5C10.1203 336.5 9.79231 336.42 9.49631 336.26C9.20831 336.092 8.98031 335.86 8.81231 335.564C8.64431 335.26 8.56031 334.9 8.56031 334.484C8.56031 334.068 8.64431 333.712 8.81231 333.416C8.98831 333.112 9.22031 332.88 9.50831 332.72C9.80431 332.552 10.1323 332.468 10.4923 332.468C10.8523 332.468 11.1763 332.552 11.4643 332.72C11.7523 332.88 11.9803 333.112 12.1483 333.416C12.3163 333.712 12.4003 334.068 12.4003 334.484C12.4003 334.9 12.3123 335.26 12.1363 335.564C11.9683 335.86 11.7403 336.092 11.4523 336.26C11.1643 336.42 10.8403 336.5 10.4803 336.5ZM9.73631 341L14.6203 332.6H15.6283L10.7443 341H9.73631ZM10.4803 335.72C10.7603 335.72 11.0043 335.616 11.2123 335.408C11.4283 335.2 11.5363 334.892 11.5363 334.484C11.5363 334.068 11.4323 333.756 11.2243 333.548C11.0163 333.332 10.7723 333.224 10.4923 333.224C10.2123 333.224 9.96031 333.332 9.73631 333.548C9.52031 333.756 9.41231 334.068 9.41231 334.484C9.41231 334.892 9.52031 335.2 9.73631 335.408C9.95231 335.616 10.2003 335.72 10.4803 335.72ZM14.9683 341.144C14.6083 341.144 14.2803 341.064 13.9843 340.904C13.6963 340.736 13.4683 340.504 13.3003 340.208C13.1323 339.904 13.0483 339.544 13.0483 339.128C13.0483 338.712 13.1323 338.356 13.3003 338.06C13.4763 337.756 13.7083 337.524 13.9963 337.364C14.2843 337.196 14.6083 337.112 14.9683 337.112C15.3283 337.112 15.6523 337.196 15.9403 337.364C16.2283 337.524 16.4563 337.756 16.6243 338.06C16.7923 338.356 16.8763 338.712 16.8763 339.128C16.8763 339.544 16.7923 339.904 16.6243 340.208C16.4563 340.504 16.2283 340.736 15.9403 340.904C15.6523 341.064 15.3283 341.144 14.9683 341.144ZM14.9563 340.364C15.2443 340.364 15.4923 340.26 15.7003 340.052C15.9163 339.844 16.0243 339.536 16.0243 339.128C16.0243 338.712 15.9203 338.4 15.7123 338.192C15.5043 337.984 15.2563 337.88 14.9683 337.88C14.6883 337.88 14.4403 337.984 14.2243 338.192C14.0083 338.4 13.9003 338.712 13.9003 339.128C13.9003 339.536 14.0043 339.844 14.2123 340.052C14.4283 340.26 14.6763 340.364 14.9563 340.364Z"
                      fill="#9EAAB7"
                    />
                    <line
                      x1="128.5"
                      y1="306.998"
                      x2="129.154"
                      y2="1.99796"
                      stroke="#EBF0F5"
                      stroke-dasharray="5 5"
                    />
                    <path
                      d="M122.931 341V340.292C123.499 339.844 124.035 339.392 124.539 338.936C125.051 338.472 125.503 338.016 125.895 337.568C126.295 337.12 126.607 336.68 126.831 336.248C127.063 335.816 127.179 335.4 127.179 335C127.179 334.704 127.127 334.428 127.023 334.172C126.927 333.916 126.767 333.712 126.543 333.56C126.319 333.4 126.015 333.32 125.631 333.32C125.263 333.32 124.955 333.404 124.707 333.572C124.459 333.732 124.271 333.948 124.143 334.22C124.023 334.492 123.963 334.784 123.963 335.096H122.991C122.991 334.544 123.107 334.072 123.339 333.68C123.571 333.28 123.887 332.976 124.287 332.768C124.687 332.56 125.139 332.456 125.643 332.456C126.387 332.456 126.995 332.668 127.467 333.092C127.947 333.508 128.187 334.132 128.187 334.964C128.187 335.46 128.063 335.952 127.815 336.44C127.567 336.92 127.251 337.388 126.867 337.844C126.483 338.292 126.071 338.712 125.631 339.104C125.199 339.496 124.795 339.848 124.419 340.16H128.475V341H122.931ZM132.849 341.144C132.105 341.144 131.461 340.964 130.917 340.604C130.381 340.236 129.969 339.728 129.681 339.08C129.393 338.424 129.249 337.664 129.249 336.8C129.249 335.936 129.393 335.18 129.681 334.532C129.969 333.876 130.381 333.368 130.917 333.008C131.461 332.64 132.105 332.456 132.849 332.456C133.593 332.456 134.233 332.64 134.769 333.008C135.305 333.368 135.717 333.876 136.005 334.532C136.293 335.18 136.437 335.936 136.437 336.8C136.437 337.664 136.293 338.424 136.005 339.08C135.717 339.728 135.305 340.236 134.769 340.604C134.233 340.964 133.593 341.144 132.849 341.144ZM132.849 340.256C133.337 340.256 133.773 340.12 134.157 339.848C134.549 339.568 134.853 339.172 135.069 338.66C135.293 338.14 135.405 337.52 135.405 336.8C135.405 336.08 135.293 335.464 135.069 334.952C134.853 334.44 134.549 334.048 134.157 333.776C133.773 333.496 133.337 333.356 132.849 333.356C132.353 333.356 131.913 333.496 131.529 333.776C131.145 334.048 130.841 334.44 130.617 334.952C130.393 335.464 130.281 336.08 130.281 336.8C130.281 337.52 130.393 338.14 130.617 338.66C130.841 339.172 131.145 339.568 131.529 339.848C131.913 340.12 132.353 340.256 132.849 340.256ZM139.165 336.5C138.805 336.5 138.477 336.42 138.181 336.26C137.893 336.092 137.665 335.86 137.497 335.564C137.329 335.26 137.245 334.9 137.245 334.484C137.245 334.068 137.329 333.712 137.497 333.416C137.673 333.112 137.905 332.88 138.193 332.72C138.489 332.552 138.817 332.468 139.177 332.468C139.537 332.468 139.861 332.552 140.149 332.72C140.437 332.88 140.665 333.112 140.833 333.416C141.001 333.712 141.085 334.068 141.085 334.484C141.085 334.9 140.997 335.26 140.821 335.564C140.653 335.86 140.425 336.092 140.137 336.26C139.849 336.42 139.525 336.5 139.165 336.5ZM138.421 341L143.305 332.6H144.313L139.429 341H138.421ZM139.165 335.72C139.445 335.72 139.689 335.616 139.897 335.408C140.113 335.2 140.221 334.892 140.221 334.484C140.221 334.068 140.117 333.756 139.909 333.548C139.701 333.332 139.457 333.224 139.177 333.224C138.897 333.224 138.645 333.332 138.421 333.548C138.205 333.756 138.097 334.068 138.097 334.484C138.097 334.892 138.205 335.2 138.421 335.408C138.637 335.616 138.885 335.72 139.165 335.72ZM143.653 341.144C143.293 341.144 142.965 341.064 142.669 340.904C142.381 340.736 142.153 340.504 141.985 340.208C141.817 339.904 141.733 339.544 141.733 339.128C141.733 338.712 141.817 338.356 141.985 338.06C142.161 337.756 142.393 337.524 142.681 337.364C142.969 337.196 143.293 337.112 143.653 337.112C144.013 337.112 144.337 337.196 144.625 337.364C144.913 337.524 145.141 337.756 145.309 338.06C145.477 338.356 145.561 338.712 145.561 339.128C145.561 339.544 145.477 339.904 145.309 340.208C145.141 340.504 144.913 340.736 144.625 340.904C144.337 341.064 144.013 341.144 143.653 341.144ZM143.641 340.364C143.929 340.364 144.177 340.26 144.385 340.052C144.601 339.844 144.709 339.536 144.709 339.128C144.709 338.712 144.605 338.4 144.397 338.192C144.189 337.984 143.941 337.88 143.653 337.88C143.373 337.88 143.125 337.984 142.909 338.192C142.693 338.4 142.585 338.712 142.585 339.128C142.585 339.536 142.689 339.844 142.897 340.052C143.113 340.26 143.361 340.364 143.641 340.364Z"
                      fill="#9EAAB7"
                    />
                    <line
                      x1="256.499"
                      y1="309"
                      x2="256.499"
                      y2="2.00006"
                      stroke="#EBF0F5"
                      stroke-dasharray="5 5"
                    />
                    <path
                      d="M254.028 341V339.2H249.768V338.42L253.848 332.6H255.024V338.312H256.272V339.2H255.024V341H254.028ZM250.884 338.312H254.076V333.716L250.884 338.312ZM260.525 341.144C259.781 341.144 259.137 340.964 258.593 340.604C258.057 340.236 257.645 339.728 257.357 339.08C257.069 338.424 256.925 337.664 256.925 336.8C256.925 335.936 257.069 335.18 257.357 334.532C257.645 333.876 258.057 333.368 258.593 333.008C259.137 332.64 259.781 332.456 260.525 332.456C261.269 332.456 261.909 332.64 262.445 333.008C262.981 333.368 263.393 333.876 263.681 334.532C263.969 335.18 264.113 335.936 264.113 336.8C264.113 337.664 263.969 338.424 263.681 339.08C263.393 339.728 262.981 340.236 262.445 340.604C261.909 340.964 261.269 341.144 260.525 341.144ZM260.525 340.256C261.013 340.256 261.449 340.12 261.833 339.848C262.225 339.568 262.529 339.172 262.745 338.66C262.969 338.14 263.081 337.52 263.081 336.8C263.081 336.08 262.969 335.464 262.745 334.952C262.529 334.44 262.225 334.048 261.833 333.776C261.449 333.496 261.013 333.356 260.525 333.356C260.029 333.356 259.589 333.496 259.205 333.776C258.821 334.048 258.517 334.44 258.293 334.952C258.069 335.464 257.957 336.08 257.957 336.8C257.957 337.52 258.069 338.14 258.293 338.66C258.517 339.172 258.821 339.568 259.205 339.848C259.589 340.12 260.029 340.256 260.525 340.256ZM266.842 336.5C266.482 336.5 266.154 336.42 265.858 336.26C265.57 336.092 265.342 335.86 265.174 335.564C265.006 335.26 264.922 334.9 264.922 334.484C264.922 334.068 265.006 333.712 265.174 333.416C265.35 333.112 265.582 332.88 265.87 332.72C266.166 332.552 266.494 332.468 266.854 332.468C267.214 332.468 267.538 332.552 267.826 332.72C268.114 332.88 268.342 333.112 268.51 333.416C268.678 333.712 268.762 334.068 268.762 334.484C268.762 334.9 268.674 335.26 268.498 335.564C268.33 335.86 268.102 336.092 267.814 336.26C267.526 336.42 267.202 336.5 266.842 336.5ZM266.098 341L270.982 332.6H271.99L267.106 341H266.098ZM266.842 335.72C267.122 335.72 267.366 335.616 267.574 335.408C267.79 335.2 267.898 334.892 267.898 334.484C267.898 334.068 267.794 333.756 267.586 333.548C267.378 333.332 267.134 333.224 266.854 333.224C266.574 333.224 266.322 333.332 266.098 333.548C265.882 333.756 265.774 334.068 265.774 334.484C265.774 334.892 265.882 335.2 266.098 335.408C266.314 335.616 266.562 335.72 266.842 335.72ZM271.33 341.144C270.97 341.144 270.642 341.064 270.346 340.904C270.058 340.736 269.83 340.504 269.662 340.208C269.494 339.904 269.41 339.544 269.41 339.128C269.41 338.712 269.494 338.356 269.662 338.06C269.838 337.756 270.07 337.524 270.358 337.364C270.646 337.196 270.97 337.112 271.33 337.112C271.69 337.112 272.014 337.196 272.302 337.364C272.59 337.524 272.818 337.756 272.986 338.06C273.154 338.356 273.238 338.712 273.238 339.128C273.238 339.544 273.154 339.904 272.986 340.208C272.818 340.504 272.59 340.736 272.302 340.904C272.014 341.064 271.69 341.144 271.33 341.144ZM271.318 340.364C271.606 340.364 271.854 340.26 272.062 340.052C272.278 339.844 272.386 339.536 272.386 339.128C272.386 338.712 272.282 338.4 272.074 338.192C271.866 337.984 271.618 337.88 271.33 337.88C271.05 337.88 270.802 337.984 270.586 338.192C270.37 338.4 270.262 338.712 270.262 339.128C270.262 339.536 270.366 339.844 270.574 340.052C270.79 340.26 271.038 340.364 271.318 340.364Z"
                      fill="#9EAAB7"
                    />
                    <line
                      x1="384.5"
                      y1="306"
                      x2="384.5"
                      y2="2.00006"
                      stroke="#EBF0F5"
                      stroke-dasharray="5 5"
                    />
                    <path
                      d="M381.032 341.144C380.424 341.144 379.912 341.032 379.496 340.808C379.08 340.576 378.744 340.268 378.488 339.884C378.24 339.5 378.056 339.072 377.936 338.6C377.824 338.12 377.768 337.632 377.768 337.136C377.768 336.208 377.896 335.396 378.152 334.7C378.408 333.996 378.776 333.448 379.256 333.056C379.744 332.656 380.332 332.456 381.02 332.456C381.548 332.456 382 332.56 382.376 332.768C382.752 332.976 383.048 333.256 383.264 333.608C383.488 333.952 383.628 334.336 383.684 334.76H382.748C382.66 334.304 382.464 333.952 382.16 333.704C381.856 333.456 381.472 333.332 381.008 333.332C380.376 333.332 379.844 333.632 379.412 334.232C378.988 334.824 378.76 335.752 378.728 337.016C378.92 336.64 379.224 336.316 379.64 336.044C380.064 335.764 380.572 335.624 381.164 335.624C381.644 335.624 382.092 335.736 382.508 335.96C382.932 336.184 383.276 336.5 383.54 336.908C383.804 337.308 383.936 337.78 383.936 338.324C383.936 338.796 383.82 339.248 383.588 339.68C383.356 340.112 383.02 340.464 382.58 340.736C382.148 341.008 381.632 341.144 381.032 341.144ZM380.96 340.256C381.336 340.256 381.672 340.176 381.968 340.016C382.264 339.856 382.496 339.636 382.664 339.356C382.832 339.068 382.916 338.74 382.916 338.372C382.916 337.804 382.728 337.352 382.352 337.016C381.984 336.672 381.52 336.5 380.96 336.5C380.584 336.5 380.248 336.588 379.952 336.764C379.656 336.932 379.42 337.16 379.244 337.448C379.076 337.736 378.992 338.048 378.992 338.384C378.992 338.744 379.076 339.068 379.244 339.356C379.42 339.636 379.656 339.856 379.952 340.016C380.248 340.176 380.584 340.256 380.96 340.256ZM388.603 341.144C387.859 341.144 387.215 340.964 386.671 340.604C386.135 340.236 385.723 339.728 385.435 339.08C385.147 338.424 385.003 337.664 385.003 336.8C385.003 335.936 385.147 335.18 385.435 334.532C385.723 333.876 386.135 333.368 386.671 333.008C387.215 332.64 387.859 332.456 388.603 332.456C389.347 332.456 389.987 332.64 390.523 333.008C391.059 333.368 391.471 333.876 391.759 334.532C392.047 335.18 392.191 335.936 392.191 336.8C392.191 337.664 392.047 338.424 391.759 339.08C391.471 339.728 391.059 340.236 390.523 340.604C389.987 340.964 389.347 341.144 388.603 341.144ZM388.603 340.256C389.091 340.256 389.527 340.12 389.911 339.848C390.303 339.568 390.607 339.172 390.823 338.66C391.047 338.14 391.159 337.52 391.159 336.8C391.159 336.08 391.047 335.464 390.823 334.952C390.607 334.44 390.303 334.048 389.911 333.776C389.527 333.496 389.091 333.356 388.603 333.356C388.107 333.356 387.667 333.496 387.283 333.776C386.899 334.048 386.595 334.44 386.371 334.952C386.147 335.464 386.035 336.08 386.035 336.8C386.035 337.52 386.147 338.14 386.371 338.66C386.595 339.172 386.899 339.568 387.283 339.848C387.667 340.12 388.107 340.256 388.603 340.256ZM394.919 336.5C394.559 336.5 394.231 336.42 393.935 336.26C393.647 336.092 393.419 335.86 393.251 335.564C393.083 335.26 392.999 334.9 392.999 334.484C392.999 334.068 393.083 333.712 393.251 333.416C393.427 333.112 393.659 332.88 393.947 332.72C394.243 332.552 394.571 332.468 394.931 332.468C395.291 332.468 395.615 332.552 395.903 332.72C396.191 332.88 396.419 333.112 396.587 333.416C396.755 333.712 396.839 334.068 396.839 334.484C396.839 334.9 396.751 335.26 396.575 335.564C396.407 335.86 396.179 336.092 395.891 336.26C395.603 336.42 395.279 336.5 394.919 336.5ZM394.175 341L399.059 332.6H400.067L395.183 341H394.175ZM394.919 335.72C395.199 335.72 395.443 335.616 395.651 335.408C395.867 335.2 395.975 334.892 395.975 334.484C395.975 334.068 395.871 333.756 395.663 333.548C395.455 333.332 395.211 333.224 394.931 333.224C394.651 333.224 394.399 333.332 394.175 333.548C393.959 333.756 393.851 334.068 393.851 334.484C393.851 334.892 393.959 335.2 394.175 335.408C394.391 335.616 394.639 335.72 394.919 335.72ZM399.407 341.144C399.047 341.144 398.719 341.064 398.423 340.904C398.135 340.736 397.907 340.504 397.739 340.208C397.571 339.904 397.487 339.544 397.487 339.128C397.487 338.712 397.571 338.356 397.739 338.06C397.915 337.756 398.147 337.524 398.435 337.364C398.723 337.196 399.047 337.112 399.407 337.112C399.767 337.112 400.091 337.196 400.379 337.364C400.667 337.524 400.895 337.756 401.063 338.06C401.231 338.356 401.315 338.712 401.315 339.128C401.315 339.544 401.231 339.904 401.063 340.208C400.895 340.504 400.667 340.736 400.379 340.904C400.091 341.064 399.767 341.144 399.407 341.144ZM399.395 340.364C399.683 340.364 399.931 340.26 400.139 340.052C400.355 339.844 400.463 339.536 400.463 339.128C400.463 338.712 400.359 338.4 400.151 338.192C399.943 337.984 399.695 337.88 399.407 337.88C399.127 337.88 398.879 337.984 398.663 338.192C398.447 338.4 398.339 338.712 398.339 339.128C398.339 339.536 398.443 339.844 398.651 340.052C398.867 340.26 399.115 340.364 399.395 340.364Z"
                      fill="#9EAAB7"
                    />
                    <line
                      x1="512.5"
                      y1="306"
                      x2="512.5"
                      y2="2.00006"
                      stroke="#EBF0F5"
                      stroke-dasharray="5 5"
                    />
                    <path
                      d="M508.565 341.144C508.013 341.144 507.517 341.044 507.077 340.844C506.637 340.636 506.289 340.352 506.033 339.992C505.785 339.624 505.661 339.2 505.661 338.72C505.661 338.208 505.809 337.748 506.105 337.34C506.409 336.932 506.809 336.66 507.305 336.524C506.849 336.372 506.497 336.128 506.249 335.792C506.001 335.456 505.877 335.088 505.877 334.688C505.877 334.28 505.985 333.908 506.201 333.572C506.417 333.228 506.725 332.956 507.125 332.756C507.525 332.556 508.005 332.456 508.565 332.456C509.125 332.456 509.605 332.556 510.005 332.756C510.405 332.956 510.713 333.228 510.929 333.572C511.145 333.908 511.253 334.28 511.253 334.688C511.253 335.08 511.129 335.448 510.881 335.792C510.633 336.128 510.281 336.372 509.825 336.524C510.321 336.66 510.717 336.932 511.013 337.34C511.317 337.748 511.469 338.208 511.469 338.72C511.469 339.2 511.341 339.624 511.085 339.992C510.837 340.352 510.493 340.636 510.053 340.844C509.613 341.044 509.117 341.144 508.565 341.144ZM508.565 336.164C509.077 336.164 509.481 336.036 509.777 335.78C510.081 335.516 510.233 335.172 510.233 334.748C510.233 334.276 510.085 333.92 509.789 333.68C509.493 333.44 509.085 333.32 508.565 333.32C508.045 333.32 507.637 333.44 507.341 333.68C507.053 333.92 506.909 334.276 506.909 334.748C506.909 335.172 507.057 335.516 507.353 335.78C507.649 336.036 508.053 336.164 508.565 336.164ZM508.565 340.256C509.197 340.256 509.669 340.112 509.981 339.824C510.301 339.528 510.461 339.14 510.461 338.66C510.461 338.116 510.289 337.704 509.945 337.424C509.601 337.144 509.141 337.004 508.565 337.004C507.989 337.004 507.529 337.144 507.185 337.424C506.841 337.704 506.669 338.116 506.669 338.66C506.669 339.14 506.825 339.528 507.137 339.824C507.457 340.112 507.933 340.256 508.565 340.256ZM516.153 341.144C515.409 341.144 514.765 340.964 514.221 340.604C513.685 340.236 513.273 339.728 512.985 339.08C512.697 338.424 512.553 337.664 512.553 336.8C512.553 335.936 512.697 335.18 512.985 334.532C513.273 333.876 513.685 333.368 514.221 333.008C514.765 332.64 515.409 332.456 516.153 332.456C516.897 332.456 517.537 332.64 518.073 333.008C518.609 333.368 519.021 333.876 519.309 334.532C519.597 335.18 519.741 335.936 519.741 336.8C519.741 337.664 519.597 338.424 519.309 339.08C519.021 339.728 518.609 340.236 518.073 340.604C517.537 340.964 516.897 341.144 516.153 341.144ZM516.153 340.256C516.641 340.256 517.077 340.12 517.461 339.848C517.853 339.568 518.157 339.172 518.373 338.66C518.597 338.14 518.709 337.52 518.709 336.8C518.709 336.08 518.597 335.464 518.373 334.952C518.157 334.44 517.853 334.048 517.461 333.776C517.077 333.496 516.641 333.356 516.153 333.356C515.657 333.356 515.217 333.496 514.833 333.776C514.449 334.048 514.145 334.44 513.921 334.952C513.697 335.464 513.585 336.08 513.585 336.8C513.585 337.52 513.697 338.14 513.921 338.66C514.145 339.172 514.449 339.568 514.833 339.848C515.217 340.12 515.657 340.256 516.153 340.256ZM522.47 336.5C522.11 336.5 521.782 336.42 521.486 336.26C521.198 336.092 520.97 335.86 520.802 335.564C520.634 335.26 520.55 334.9 520.55 334.484C520.55 334.068 520.634 333.712 520.802 333.416C520.978 333.112 521.21 332.88 521.498 332.72C521.794 332.552 522.122 332.468 522.482 332.468C522.842 332.468 523.166 332.552 523.454 332.72C523.742 332.88 523.97 333.112 524.138 333.416C524.306 333.712 524.39 334.068 524.39 334.484C524.39 334.9 524.302 335.26 524.126 335.564C523.958 335.86 523.73 336.092 523.442 336.26C523.154 336.42 522.83 336.5 522.47 336.5ZM521.726 341L526.61 332.6H527.618L522.734 341H521.726ZM522.47 335.72C522.75 335.72 522.994 335.616 523.202 335.408C523.418 335.2 523.526 334.892 523.526 334.484C523.526 334.068 523.422 333.756 523.214 333.548C523.006 333.332 522.762 333.224 522.482 333.224C522.202 333.224 521.95 333.332 521.726 333.548C521.51 333.756 521.402 334.068 521.402 334.484C521.402 334.892 521.51 335.2 521.726 335.408C521.942 335.616 522.19 335.72 522.47 335.72ZM526.958 341.144C526.598 341.144 526.27 341.064 525.974 340.904C525.686 340.736 525.458 340.504 525.29 340.208C525.122 339.904 525.038 339.544 525.038 339.128C525.038 338.712 525.122 338.356 525.29 338.06C525.466 337.756 525.698 337.524 525.986 337.364C526.274 337.196 526.598 337.112 526.958 337.112C527.318 337.112 527.642 337.196 527.93 337.364C528.218 337.524 528.446 337.756 528.614 338.06C528.782 338.356 528.866 338.712 528.866 339.128C528.866 339.544 528.782 339.904 528.614 340.208C528.446 340.504 528.218 340.736 527.93 340.904C527.642 341.064 527.318 341.144 526.958 341.144ZM526.946 340.364C527.234 340.364 527.482 340.26 527.69 340.052C527.906 339.844 528.014 339.536 528.014 339.128C528.014 338.712 527.91 338.4 527.702 338.192C527.494 337.984 527.246 337.88 526.958 337.88C526.678 337.88 526.43 337.984 526.214 338.192C525.998 338.4 525.89 338.712 525.89 339.128C525.89 339.536 525.994 339.844 526.202 340.052C526.418 340.26 526.666 340.364 526.946 340.364Z"
                      fill="#9EAAB7"
                    />
                    <path
                      d="M628.782 341V333.728L627.426 334.028V333.332L629.118 332.6H629.802V341H628.782ZM634.612 341.144C633.868 341.144 633.224 340.964 632.68 340.604C632.144 340.236 631.732 339.728 631.444 339.08C631.156 338.424 631.012 337.664 631.012 336.8C631.012 335.936 631.156 335.18 631.444 334.532C631.732 333.876 632.144 333.368 632.68 333.008C633.224 332.64 633.868 332.456 634.612 332.456C635.356 332.456 635.996 332.64 636.532 333.008C637.068 333.368 637.48 333.876 637.768 334.532C638.056 335.18 638.2 335.936 638.2 336.8C638.2 337.664 638.056 338.424 637.768 339.08C637.48 339.728 637.068 340.236 636.532 340.604C635.996 340.964 635.356 341.144 634.612 341.144ZM634.612 340.256C635.1 340.256 635.536 340.12 635.92 339.848C636.312 339.568 636.615 339.172 636.832 338.66C637.056 338.14 637.168 337.52 637.168 336.8C637.168 336.08 637.056 335.464 636.832 334.952C636.615 334.44 636.312 334.048 635.92 333.776C635.536 333.496 635.1 333.356 634.612 333.356C634.116 333.356 633.676 333.496 633.292 333.776C632.908 334.048 632.604 334.44 632.38 334.952C632.156 335.464 632.044 336.08 632.044 336.8C632.044 337.52 632.156 338.14 632.38 338.66C632.604 339.172 632.908 339.568 633.292 339.848C633.676 340.12 634.116 340.256 634.612 340.256ZM642.692 341.144C641.948 341.144 641.304 340.964 640.76 340.604C640.224 340.236 639.812 339.728 639.524 339.08C639.236 338.424 639.092 337.664 639.092 336.8C639.092 335.936 639.236 335.18 639.524 334.532C639.812 333.876 640.224 333.368 640.76 333.008C641.304 332.64 641.948 332.456 642.692 332.456C643.436 332.456 644.076 332.64 644.612 333.008C645.148 333.368 645.56 333.876 645.848 334.532C646.136 335.18 646.28 335.936 646.28 336.8C646.28 337.664 646.136 338.424 645.848 339.08C645.56 339.728 645.148 340.236 644.612 340.604C644.076 340.964 643.436 341.144 642.692 341.144ZM642.692 340.256C643.18 340.256 643.616 340.12 644 339.848C644.392 339.568 644.696 339.172 644.912 338.66C645.136 338.14 645.248 337.52 645.248 336.8C645.248 336.08 645.136 335.464 644.912 334.952C644.696 334.44 644.392 334.048 644 333.776C643.616 333.496 643.18 333.356 642.692 333.356C642.196 333.356 641.756 333.496 641.372 333.776C640.988 334.048 640.684 334.44 640.46 334.952C640.236 335.464 640.124 336.08 640.124 336.8C640.124 337.52 640.236 338.14 640.46 338.66C640.684 339.172 640.988 339.568 641.372 339.848C641.756 340.12 642.196 340.256 642.692 340.256ZM649.008 336.5C648.648 336.5 648.32 336.42 648.024 336.26C647.736 336.092 647.508 335.86 647.34 335.564C647.172 335.26 647.088 334.9 647.088 334.484C647.088 334.068 647.172 333.712 647.34 333.416C647.516 333.112 647.748 332.88 648.036 332.72C648.332 332.552 648.66 332.468 649.02 332.468C649.38 332.468 649.704 332.552 649.992 332.72C650.28 332.88 650.508 333.112 650.676 333.416C650.844 333.712 650.928 334.068 650.928 334.484C650.928 334.9 650.84 335.26 650.664 335.564C650.496 335.86 650.268 336.092 649.98 336.26C649.692 336.42 649.368 336.5 649.008 336.5ZM648.264 341L653.148 332.6H654.156L649.272 341H648.264ZM649.008 335.72C649.288 335.72 649.532 335.616 649.74 335.408C649.956 335.2 650.064 334.892 650.064 334.484C650.064 334.068 649.96 333.756 649.752 333.548C649.544 333.332 649.3 333.224 649.02 333.224C648.74 333.224 648.488 333.332 648.264 333.548C648.048 333.756 647.94 334.068 647.94 334.484C647.94 334.892 648.048 335.2 648.264 335.408C648.48 335.616 648.728 335.72 649.008 335.72ZM653.496 341.144C653.136 341.144 652.808 341.064 652.512 340.904C652.224 340.736 651.996 340.504 651.828 340.208C651.66 339.904 651.576 339.544 651.576 339.128C651.576 338.712 651.66 338.356 651.828 338.06C652.004 337.756 652.236 337.524 652.524 337.364C652.812 337.196 653.136 337.112 653.496 337.112C653.856 337.112 654.18 337.196 654.468 337.364C654.756 337.524 654.984 337.756 655.152 338.06C655.32 338.356 655.404 338.712 655.404 339.128C655.404 339.544 655.32 339.904 655.152 340.208C654.984 340.504 654.756 340.736 654.468 340.904C654.18 341.064 653.856 341.144 653.496 341.144ZM653.484 340.364C653.772 340.364 654.02 340.26 654.228 340.052C654.444 339.844 654.552 339.536 654.552 339.128C654.552 338.712 654.448 338.4 654.24 338.192C654.032 337.984 653.784 337.88 653.496 337.88C653.216 337.88 652.968 337.984 652.752 338.192C652.536 338.4 652.428 338.712 652.428 339.128C652.428 339.536 652.532 339.844 652.74 340.052C652.956 340.26 653.204 340.364 653.484 340.364Z"
                      fill="#9EAAB7"
                    />
                    <path
                      d="M1 294.259C21.933 292.465 70.4484 282.276 97.0456 255.869C130.292 222.86 176.776 112.351 207.252 123.833C237.728 135.314 244.5 247.975 278.055 233.623C311.609 219.272 327.924 171.193 344.24 173.705C360.555 176.216 387.645 214.248 411.349 201.691C435.052 189.133 447.981 178.369 481.844 238.646C508.933 286.868 524.633 284.213 544.643 273.808C566.294 265.795 616 258.093 641.612 291.389L649 300"
                      stroke="#C8D6E5"
                    />
                    <path
                      d="M129 211.877C147.667 176.826 189.8 110.396 209 125.089C233 143.455 230.231 172.985 253 218"
                      stroke="#438AF6"
                      stroke-width="2"
                    />
                    <line
                      x1="203.5"
                      y1="307"
                      x2="203.5"
                      y2="2.00003"
                      stroke="#438AF6"
                      stroke-dasharray="5 5"
                    />
                    <line
                      x1="539.5"
                      y1="305.5"
                      x2="539.5"
                      y2="2.50003"
                      stroke="#FF9142"
                      stroke-linecap="round"
                      stroke-dasharray="5 5"
                    />
                    <circle cx="203.5" cy="122.5" r="5.5" fill="#438AF6" />
                    <circle cx="539.5" cy="122.5" r="5.5" fill="#FF9142" />
                  </svg>
                </div>

                <div>
                  <Modal
                    isOpen={modalIsOpen}
                    onAfterOpen={afterOpenModal}
                    onRequestClose={closeModal}
                    style={customStyles}
                    contentLabel="Example Modal"
                  >
                    <div className="d-flex justify-content-between m-3">
                      <div style={{ fontSize: '36px' }} className="font700">
                        Update Scores
                      </div>

                      <div>
                        <img src={htmlIcon} height="40" width="40" />
                      </div>
                    </div>

                    <hr></hr>

                    {/* input parent */}

                    <div>
                      <div className="oneLine d-flex justify-content-between m-3 ">
                        <div className="mt-2 "> 1. Update your rank</div>

                        <div className="mt-2">
                          <input
                            style={{
                              width: '150px',
                              height: '40px',
                              border: '1px solid #142683',
                              borderRadius: '5px',
                            }}

                            name="rank"
                            
                            onChange={changeData}
                            value={score.rank}
                          />
                        </div>
                      </div>

                      <div className="oneLine d-flex justify-content-between m-3 ">
                        <div className="mt-2">2. Update your percentile</div>

                        <div className="mt-2">
                          <input
                            style={{
                              width: '150px',
                              height: '40px',
                              border: '1px solid #142683',
                              borderRadius: '5px',
                            }}

                            name="percentage"

                            onChange={changeData}
                            value={score.percentage}
                          />
                        </div>
                      </div>

                      <div className="oneLine d-flex justify-content-between m-3 ">
                        <div className="mt-2">
                          3. Update your current score (out of 15)
                        </div>

                        <div className="mt-2">
                          <input
                            style={{
                              width: '150px',
                              height: '40px',
                              border: '1px solid #142683',
                              borderRadius: '5px',
                            }}
                            name="correctAnswers"
                            onChange={changeData}
                            value={score.correctAnswers}
                          />
                        </div>
                      </div>
                    </div>

                    <hr></hr>

                    <div className="d-flex justify-content-end">
                      <div className="d-flex justify-content-end m-2">
                        <div>
                          <button
                            style={{
                              border: '1px solid #142683',
                              height: '40px',
                              width: '120px',
                              color: '#142683',
                              borderRadius: '5px',
                              fontSize: '14px',
                              backgroundColor: 'white',
                            }}
                            className="pointer m-1 "
                            onClick={closeModal}
                          >
                            Cancel
                          </button>
                        </div>

                        <div>
                          <button
                            style={{
                              backgroundColor: '#142683',
                              height: '40px',
                              width: '120px',
                              color: 'white',
                              borderRadius: '5px',
                              fontSize: '14px',
                            }}
                            className="pointer m-1"
                            onClick={handleData}
                          >
                            Save
                          </button>
                        </div>
                      </div>
                    </div>
                  </Modal>
                </div>
              </div>
            </div>

            {/* Sub Main Right */}
            <div>
              {/* Syllabus Wise Analysis Section */}
              <SyllabusWiseSection />

              {/* Question Analysis Section */}
              <QuestionAnalysis percentage={(score.correctAnswers / 15) * 100} />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SkillTest