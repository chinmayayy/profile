import {useState} from 'react';
import Card from "../card";
import './communities.css';

const Community = () => {

 
    const [communities, setCommunities] = useState([
        {
          title: "President",
          subtitle: "Ananta- The Science Society, Indraprastha College for Women",
          description: "Aug 2021 - May 2022"
        },
        {
          title: "Core Team Member",
          subtitle:"Google Developer Students Club, ,Indraprastha College for Women",
          description: "Sep 2020 - April 2021"
        },
        {
          title: "Beta Community Member",
          subtitle:"Microsoft Student Ambassador Community",
          description: "Jan 2021 - June 2022"
        },
        {
          title: "Mentee & Volunteer",
          subtitle:"Delhi Women in Machine Learning & Data Science",
          description: "March 2021 - April 2022"
        },
      ]);
      
        return (
          <div className="row-grid">
    
            <div className="row">
              <Card cardInfo={communities}/>
            </div>
          </div>
    
        )
    }
    
    export default Community
