import React, { Component } from 'react';
import { connect } from 'react-redux';
import Card from "./Card";

class ProfileList extends Component {
    render() {
        const profiles = this.props.data.map((profile) => (
            <Card key={profile.id} profile={profile} />
        ));
        return (
            <div className="profiles">

                {profiles}

            </div>
        );
    }
}

// &lt;
// &gt;

function mapStateToProps(state) {
    return {
        data: state.data
    }
}

export default connect(mapStateToProps)(ProfileList);
