import {useState} from 'react';
import Card from "../card";
import './resume.css';

const Resume = () => {

  const [educaton, setEducation] = useState([
    {
      title: "Masters of Computer Applications",
      subtitle: "Indira Gandhi Delhi Technical University for Women",
      description: "Aug 2022 - Present"
    },
    {
      title: "BSc. (Hons) Computer Science ",
      subtitle: "University of Delhi; CGPA: 9.122",
      description: "July 2019 - July 2022"
    },
  ]);
  
  const [communities, setCommunities] = useState([
    {
      dates: "2021",
      title: "Student Scholar, Grace Hopper Celebration'21",
      subtitle: "Anita B.Org",
      description: "The AnitaB.org global flagship event to highlight contributions of women in computing. Received scholarship to be a part of the Celebration."
    },
    {
      dates: "April 2021 - Sept 2021",
      title: "Cisco thingQbator Select",
      subtitle:"",
      description: "Selected in top 80 teams out of 800 applicants nationwide. Built Protege as a startup, under the guidance of mentors."
    },
  ]);
  
    return (
      <div className="col-grid">
        
        <div className="row">
          <h1 className='education'>Education</h1>
          <Card cardInfo={educaton}/>
        </div>

        <div className="row">
          <h1 className='communities'>Community</h1>
          <Card cardInfo={communities}/>
        </div>
      </div>

    )
}


export default Resume