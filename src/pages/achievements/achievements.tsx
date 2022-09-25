import {useState} from 'react';
import Card from "../card";
import './achievements.css';

const Achievements = () => {

    const [achievements, setAchievements] = useState([
        {
            title: "College All-Round Excellence Award",
            subtitle:"Felicitated by the honourable Principal Dr. Babli Moitra Saraf, Indraprastha College for Women in the 99th College Day Ceremony",
            description: "Feb 2022"
        },
        {
          title: "Best Student Award",
          subtitle: "Participated in live interaction with Nanosciencetists in the 6th International Conference on Nanoscience and Nanotechnology, SRM IST, Kattankulathur",
          description: "Feb 2021"
        },
        {
          title: "LiFT Scholarship'21 Winner",
          subtitle: "Received the scholarship under Women in Open Source Category",
          description: "July 2021"
        },
      ]);

      return (
        <div className="row-grid">
  
          <div className="row">
            <Card cardInfo={achievements}/>
          </div>
        </div>
  
      )
  }
  
  export default Achievements
