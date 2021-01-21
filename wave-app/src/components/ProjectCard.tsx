import React, { Component } from 'react';
import '../styles/App.scss';

export interface IProjectCardProps {
    name: string;
    description: string;
    imgName: string;
    altText: string;
    linkPath?: string;
    linkText?: string
  }

export default class ProjectCard extends React.Component<any, IProjectCardProps> {

    render () {

        return (
            <div className="projectCard">
                <h1>{this.props.name}</h1>
                <div className="gifHolder">
                    <img src={require(`../images/${this.props.imgName}`)} alt={this.props.altText}/>
                </div>
                <div className="descriptionHolder">
                    <p>{this.props.description}</p>
                    {this.props.linkPath && <div className="linkHolder"><a href={this.props.linkPath}>{this.props.linkText}</a></div>}
                </div>
            </div>  

        )
    }
}