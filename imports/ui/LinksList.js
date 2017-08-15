import {Meteor} from 'meteor/meteor';
import React from 'react';
import { Tracker } from 'meteor/tracker';
import {Links} from '../api/links';
import LinksListItem from './LinksListItem';
import {Session } from 'meteor/session';
import FlipMove from 'react-flip-move';


export default class LinksList extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            links: []
        };
    }

    //this is a life-cycle method that gets called internally by the react code
    componentDidMount(){
        console.log('componentDidMount LinksList');
        this.linksTracker= Tracker.autorun ( () => {
            Meteor.subscribe('links');
            const links = Links.find({
                visible: Session.get('showVisible')
            }).fetch();
            this.setState({links});

        });
    }

    //another life-cycle method
    componentWillUnmount(){
        // console.log('componentWillUnmount LinksList');
        this.linksTracker.stop();
    }

    renderLinksListItems(){

        if(this.state.links.length === 0){
            return (
                <div className="item">
                    <p className= "item__status-message">No links found</p>
                </div>
            );
        }
        else{
            return this.state.links.map( (link) => {
                const shortUrl = Meteor.absoluteUrl(link._id);
                return <LinksListItem key={link._id}  shortUrl={shortUrl} {...link}/>;
                });
        }



    }


    render(){
        return (
            <div>
                <div>
                    <FlipMove maintainContainerHeight= {true}>
                        {this.renderLinksListItems()}
                    </FlipMove>
                </div>
            </div>
        );
    }
};
