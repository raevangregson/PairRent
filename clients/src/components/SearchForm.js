import React, { Component } from 'react';
import { connect } from 'react-redux';
import Card from './Card';
import { makeMatches } from '../actions';

class SearchForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            smoking: null,
            needs: null,
            female: null,
            male: null,
            noPreference: null,
            kids: null
        };
        this.handleInputChange = this.handleInputChange.bind(this);
    }
    render() {
      const madeMatches = this.props.matches.map(match => (
        <Card profile={match} key={match.id}/>
      ));
        return (
            <div className="searchForm">
                <form className="search" >
                    <h2>What are you looking for in a Roommate?</h2>
                    <label>Smoking?<input type="checkbox" onChange={this.handleInputChange} /></label>
                    <label>Special Needs?<input type="checkbox" onChange={this.handleInputChange} /></label>
                    <label>Female?<input gender="female" name="gender" value="female" type="radio" onChange={this.handleInputChange} /></label>
                    <label>Male?<input gender="male" name="gender" value="male" type="radio" onChange={this.handleInputChange} /></label>
                    <label>No Preference?<input gender="noPreference" name="gender" value="none" type="radio" onChange={this.handleInputChange} /></label>
                    <label>Number of Kids? <input type="number" min="1" max="10" onChange={this.handleInputChange} /></label>
                </form>
                <div>
                  {madeMatches}
                </div>
            </div>

        );
    }

    handleInputChange(event) {
        const target = event.target;
        // 'number'
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.title;

        this.setState({
            [name]: value
        });

        const wants = {
            smoking: this.state.smoking,
            needs: this.state.needs,
            female: this.state.female,
            male: this.state.male,
            noPreference: this.state.noPreference,
            kids: this.state.kids
        }
        this.props.makeMatches(wants);
    }
}

function mapStateToProps(state) {
    return {
        matches:state.matches
    }
}

const mapActionsToProps = {
    makeMatches
}

export default connect(mapStateToProps, mapActionsToProps)(SearchForm);
