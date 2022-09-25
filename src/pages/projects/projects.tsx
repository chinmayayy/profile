import {useState} from 'react';
import Card from "../card";
import './projects.css';

const Projects = () => {

    const [projects, setProjects] = useState([
        {
            title: "RAAHI Mobile App",
            subtitle:"Awarded Honourable Mention for developing mobile app prototype using Java for the Women Empowerment track. Implemented Firebase services using Cloud Firestore for backend integration and Material UI as frontend framework",
            description: "Java, Firebase, XML, Android Studio"
        },
        {
          title: "Snapsun GIF Generator",
          subtitle: "Built a script in Python which lets the user generate and save Time-lapse GIFs of the Sun for a specific input day. Implemented web scraping using python libraries",
          description: "Python, Urllib, Beautiful Soup"
        },
      ]);

      return (
        <div className="row-grid">
  
          <div className="row">
            <Card cardInfo={projects}/>
          </div>
        </div>
  
      )
  }
  
  export default Projects
