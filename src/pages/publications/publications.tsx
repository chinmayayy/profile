import {useState} from 'react';
import Card from "../card";
import './publications.css';

const Publications = () => {

    const [publications, setPublications] = useState([
        {
            title: "Article: Kandor Space Settlement- An Overview Study",
            subtitle:"Proposed 'Kandor' as a viable space settlement case study with a detailed analysis of features like orbital location, initiating structural architecture, operations, automation requirements and contingency plans",
            description: "International Journal of Scientific Research and Engineering Development Volume 4 Issue"
        },
      ]);

      return (
        <div className="row-grid">
  
          <div className="row">
            <Card cardInfo={publications}/>
          </div>
        </div>
  
      )
  }
  
  export default Publications
