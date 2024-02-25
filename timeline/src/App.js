import logo from './logo.svg';
import './App.css';
import { ReactComponent as WorkIcon } from './img/work.svg';
import { ReactComponent as SchoolIcon } from './img/school.svg';
import timelineElements from './timelineElements';  


import {VerticalTimeline, VerticalTimelineElement} from "react-vertical-timeline-component";

import "react-vertical-timeline-component/style.min.css";



function App() {


  let workIconStyles = {background:"#06D6A0"};
  let schoolIconStyles = {background: "#f9c74f"};
  return (
    // <div> Hello World </div>
    <div>
      <h1 className='title'>TimeLine</h1>
    <VerticalTimeline>
      {
        timelineElements.map(element => {

          let isWorkIcon = element.icon === 'work';
          let showButton = 
            element.buttonText !== undefined && 
            element.buttonText!== null && 
            element.buttonText !== "";

          return (
            <VerticalTimelineElement
            key={element.key}
            date={element.date}
            dateClassName="date"
            iconStyle = {isWorkIcon ? workIconStyles : schoolIconStyles}
            icon = {isWorkIcon ? <WorkIcon /> : <SchoolIcon/>}
            >
              <h3 className='vertical-timline-element-title'>
                {element.title}
              </h3>

              <h5 className='vertical-timline-element-subtitle'>
                {element.location}
              </h5>
              <p id='description'>
                {element.description}
              </p>
              {showButton && (<a className={`button ${isWorkIcon ? "workButton" : "schoolButton"}`} 
              href="/"
              >
                {element.buttonText}
                </a>
                )
                }
            </VerticalTimelineElement>
          );
        })
      }
    </VerticalTimeline>
    </div>
  );
}

export default App;
