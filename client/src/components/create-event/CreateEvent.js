import React, { Component } from 'react';
import { connect } from 'react-redux';

import TextFieldGroup from '../common/TextFieldGroup';

class CreateEvent extends Component{
    constructor(props){
        super(props);
        this.state = {
            nameofevent: '',
            typeofsport: '',
            numberofplayer: 0,
            location: '',
            description: '',
            errors: {}
        };
        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }
    
        onSubmit(e){
            e.preventDefault();
            console.log('submit');
        }
    
        onChange(e){
            this.setState({[e.target.name]: e.target.value});
        }
    
    render(){
        const {errors} = this.state;
        
        return(
            <div className="create-event">
                <div className="container">
                    <div className="row">
                        <div className="col-md-8 m-auto">
                            <h1 className="display-4 text-center">Host Your Event</h1>
                            <p className="lead text-center">
                                Create your own event for other to play with you
                            </p>
                            <small className="d-block pb-3">* = required fields</small>
                            <form onSubmit={this.onSubmit}>
                                <TextFieldGroup
                                  placeholder="Name of Event"
                                  name="nameofevent"
                                  type="name"
                                  value={this.state.nameofevent}
                                  onChange={this.onChange}
                                  error={errors.nameofevent}
                                />
                                <TextFieldGroup
                                  placeholder="Type of Sport"
                                  name="typeofsport"
                                  type="name"
                                  value={this.state.typeofsport}
                                  onChange={this.onChange}
                                  error={errors.typeofsport}
                                />
                                <TextFieldGroup
                                  placeholder="Number of player"
                                  name="numberofplayer"
                                  type="number"
                                  value={this.state.numberofplayer}
                                  onChange={this.onChange}
                                  error={errors.numberofplayer}
                                />
                                <TextFieldGroup
                                  placeholder="Location"
                                  name="location"
                                  type="name"
                                  value={this.state.location}
                                  onChange={this.onChange}
                                  error={errors.location}
                                />
                                <TextFieldGroup
                                  placeholder="Description"
                                  name="description"
                                  type="name"
                                  value={this.state.description}
                                  onChange={this.onChange}
                                  error={errors.description}
                                />
                                <input type="submit" className="btn btn-info btn-block mt-4" />
                          </form>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    
});

export default connect(mapStateToProps)(CreateEvent);