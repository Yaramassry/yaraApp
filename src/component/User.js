import React, { Component } from "react";
import ReactDOM from "react-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Button, Card } from 'react-bootstrap';
import { Link } from "react-router-dom";
import { useParams } from 'react-router-dom';
import {getUser} from '../action/usersAction';


class User extends Component {
    constructor(props) {
      super(props);
    
    this.state = {
        userName:'',
        user:{},
        id:"",
        first_name:"",
        email:"",
        last_name:"",
        avatar:"",
        fname:"first name: ",
        lname:"last name: ",
        emailString:"email: ",
        idString :"userid :"
      }};
   

      componentDidMount() {
        if (
            this.props.match !== undefined &&
            this.props.match.params !== undefined
          ){
            const { id } = this.props.match.params;
            if (id !== undefined && id !== null) {
                this.setState({id});
                this.props.getUser(id);
                console.log(id , "idddddddd")
            }
          }
    
      }

      async componentWillReceiveProps(nextProps, nextState) {
          console.log(nextProps,"nextPropsss")
        console.log("nextProps.user.id:" ,nextProps.user.id)
        console.log("nextProps.user.first_name:" ,nextProps.user.first_name)
          if (
            nextProps.user !== this.state.user 
            
          ) {
            
        
           
            this.setState({
              id:  nextProps.user.id,
              first_name: nextProps.user.first_name,
              last_name: nextProps.user.last_name,
              avatar:nextProps.user.avatar,
              email:nextProps.user.email
            });
            
            
        //    console.log(this.state.user.id , "users in user")
           
          } else if (
            nextProps.user === undefined ||
            nextProps.user.length === 0
          ) {
            
            this.setState({
              user: {},
            });
          }
         // this.props.getUser()
        }

        // getUser =()=>{
        //     if (
        //         this.props.match !== undefined &&
        //         this.props.match.params !== undefined
        //       ) {
        //         const { id } = this.props.match.params;
        //         console.log(id , "ididid")
        //         this.props.getUser(id);
           
        //       } 
        // }
      

    render(){
     
        console.log("id:" , this.state.id , "first_name:" , this.state.first_name ,
        "last_name:" , this.state.last_name, "email:" , this.state.email ,
     "avatar:" , this.state.avatar
        )
        // const queryParams = new URLSearchParams(window.location.search);
        // const id = queryParams.get('id');
        // console.log(id , "id") ;
        // const User = () => {
        //     const { userName } = useParams();
        //     this.setState({
        //         userName:userName
        //     })
        //     return (
        //         <div>Username: { userName }</div>
        //     );
        // }
        
    //  console.log(this.state.user, "username as user")
  
      
        return(
          
        //    Item,
         
              <Card style={{ width: '18rem' }}>
                
                    
                
                  <Card.Img variant="top" src={this.state.avatar} />
               
                 <Card.Body>
                    {/* <Card.Title> {this.state.first_name} {this.state.last_name} {this.state.id}</Card.Title>
                     <Card.Text>
                         {this.state.email}
                    </Card.Text> */}
                    <div>
                        {this.state.fname}{this.state.first_name} <br />
                        {this.state.lname}{this.state.last_name} <br />
                        {this.state.idString}{this.state.id} <br />
                        {this.state.emailString}{this.state.email} <br />
                    </div>
                    
                 </Card.Body> 
                 </Card> 
        )
    }

}
User.propTypes = {
    getUser: PropTypes.func.isRequired,
   
  };

const mapStateToProps = (state) => ({
    users: state.users,
   // user:state.user,
 
   });

export default connect(mapStateToProps ,{getUser})(User);
