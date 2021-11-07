import React, { Component } from "react";
import ReactDOM from "react-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import {getUsers} from '../action/usersAction';
import { Link } from "react-router-dom";
//import User from "./User";
import { Button, Card } from 'react-bootstrap';

class users extends Component {
    constructor(props) {
      super(props);
      this.state = {
        users: [],
        user:{},
        first_name:'' ,

      };
    }

    componentDidMount() {
      this.props.getUsers();
      console.log("yaya")
        // fetch("https://reqres.in/api/users")
        // .then(res => res.json())
        // .then(
        //     (result) => {
        //         console.log(result);
        //     this.setState({
        //         users: result.data
        //     });
        //     console.log(this.state);
        //     },
        //     // Note: it's important to handle errors here
        //     // instead of a catch() block so that we don't swallow
        //     // exceptions from actual bugs in components.
        //     (error) => {

        //     }
        // )
    }
    async componentWillReceiveProps(nextProps, nextState) {
      console.log("nextProps.users" ,nextProps.users.user)
        if (
          nextProps.users.user !== this.state.users 
          
        ) {
          
          const { users } = nextProps.users.user;
         // console.log(users,"users")
          this.setState({
            users:nextProps.users.user,
          });
         // console.log(this.state.users , "users in users")
         
        } else if (
          nextProps.users[0] === undefined ||
          nextProps.users.length === 0
        ) {
          
          this.setState({
            users: [],
          });
        }
      }

    render(){
        console.log(this.state.users ,"users in render");
        return(
          <Card style={{ width: '18rem' }}>
                {this.state.users.map((item, index) => (
                    <div>
                    
                    <a href={`/user/${item.id}`} >
                    <Card.Img variant="top" src={item.avatar} key={index} />
                   </a>
                     <Link to={`/user/${item.id}`}>View User </Link>
                     {/* {this.setState({first_name:item.first_name})} */}
                     <Card.Body>
                    <Card.Title>{item.first_name} {item.last_name}</Card.Title>
                     <Card.Text>
                         {item.email}
                    </Card.Text>
                    
                 </Card.Body> 
                    </div>
                ))}
            </Card>
        )
    }

}
users.propTypes = {
  getUsers: PropTypes.func.isRequired,
 
};
const mapStateToProps = (state) => ({
   users: state.users,

  });
export default connect(mapStateToProps ,{getUsers})(users);
