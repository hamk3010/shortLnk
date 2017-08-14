import React from 'react';
import {Session } from 'meteor/session';
import {Tracker} from 'meteor/tracker';


export default class LinksListFilters extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            showVisible: false
        };

    }

    componentDidMount(){
        this.myTracker= Tracker.autorun ( () => {
            const showVisible= Session.get('showVisible');
            this.setState({showVisible} );
        });
    }

    componentWillUnmount(){
        this.myTracker.stop();
    }

     render(){
        return (
            <div>
                <label>
                    <input type ="checkbox" checked={!this.state.showVisible} onChange={(e) => {
                        Session.set('showVisible', !e.target.checked);
                    }}/>
                    show hidden links
                </label>
            </div>
        );

    }
}