import React, { Component } from 'react';
import '../styles/App.scss';

export interface IProjectCardProps {
    name: string;
    description: string;
    imgName: string;
    altText: string;
  }

export default class ProjectCard extends React.Component<any, IProjectCardProps> {
    constructor(props:any) {
        super(props);
    }

    render () {

        return (
            <div className="projectCard">
                <h1>{this.props.name}</h1>
                <div className="gifHolder">
                    <img src={require(`../images/${this.props.imgName}`)} alt={this.props.altText}/>
                </div>
                <div className="descriptionHolder">
                    <p>{this.props.description}</p>
                </div>
            </div>  

        )
    }
}