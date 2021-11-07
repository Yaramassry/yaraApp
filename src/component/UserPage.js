import React, { Component } from "react";
import ReactDOM from "react-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import User from "./User";
import { withRouter } from "react-router";

class UserPage extends Component {
    constructor(props) {
      super(props);
      this.state = {
          user: null
      }
    }

    componentDidMount() {
        const id = this.props.match.params.id;
        fetch(`https://reqres.in/api/users/` + id)
        .then(res => res.json())
        .then(
            (result) => {
                console.log(result.data);
            this.setState({
                user: result.data
            });
            console.log(this.state);
            },
            // Note: it's important to handle errors here
            // instead of a catch() block so that we don't swallow
            // exceptions from actual bugs in components.
            (error) => {

            }
        )
    }


    render(){
        console.log(this.state.user);
        return(
            <User user={this.state.user} />
        )
    }

}

const mapStateToProps = (state) => ({
    user: state.user,
   });
export default withRouter(connect(mapStateToProps)(UserPage));
