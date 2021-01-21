import React from 'react';
import ProjectStrings from '../resources/ProjectStrings';
import '../styles/App.scss';
import ProjectCard from './ProjectCard';

export default class WavePage extends React.Component<any, any> {
    constructor(props:any) {
        super(props);
    }

    displayErrorMessage(): void{
    
      };

    render () {

        return (
            <div className="parallax">
                <div className="group">
                    <div className="parallax_layer parallax_layer-base">
                    </div>
                    <div className="parallax_layer parallax_layer-01">
                    </div>
                    <div className="parallax_layer parallax_layer-02">
                    </div>
                    <div className="parallax_layer parallax_layer-03">
                    </div>
                    <div className="parallax_layer parallax_layer-04">
                    </div>
                </div>
                <div className="content">
                    <div className="projectCard">
                        <h1>{ProjectStrings.Welcome.name}</h1>
                        <div className="descriptionHolder">
                            <p>{ProjectStrings.Welcome.description}</p>
                        </div>
                    </div>
                    <ProjectCard name={ProjectStrings.Talkulizer.name} description={ProjectStrings.Talkulizer.description} imgName={'Talkulizer.gif'} altText={"Talkulizer"} />
                    <ProjectCard name={ProjectStrings.lilBub.name} description={ProjectStrings.lilBub.description} imgName={'BubAdv.gif'} altText={"Lil Bub's Big Adventure"} />
                    <ProjectCard name={ProjectStrings.sethLovesToTalk.name} description={ProjectStrings.sethLovesToTalk.description} imgName={'SethLovesToTalk.gif'} altText={'Seth Loves to Talk'} />
                    <ProjectCard name={ProjectStrings.newtonOpticks.name}   description={ProjectStrings.newtonOpticks.description} imgName={'NewtonOpt.gif'} altText={"Newton's Opticks"} />
                    <ProjectCard name={ProjectStrings.sethLovesPizza.name}  description={ProjectStrings.sethLovesPizza.description} imgName={'SethLovesPizza.gif'} altText={"Seth Loves Pizza"} />
                </div>
                <div className="endImage">
                    <img src={require(`../images/GreatWaveNegative.png`)} alt="The Great Wave (Negative)"/>
                </div>
            </div>  

        )
    }
}