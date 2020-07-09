import React from 'react'
import axios from 'axios'

class Followers extends React.Component {
    constructor(){
        super();
        this.state={
            followerInfo:[]
        }
    }

    componentDidMount() {
        console.log('cDM is running')
    
        axios.get('https://api.github.com/users/JDMTias/followers')
        .then(res => {
          const followers = res.data
          console.log(followers)
          this.setState({
            followerInfo: followers
          })
        })    
        
      }


    render(){
         if(this.state.followerInfo.length === 0){
            return <p>Looking for Followers...</p>
        }
    return(
       <div className='allcards'>
        {this.state.followerInfo.map(foll => (
            <div className='followerCard'> <img src={foll.avatar_url} alt={foll.login} />
            <h2>{foll.login}</h2>
            <h3>{foll.name}</h3>
            </div>
        ))}
        </div>
    )
    }
}

export default Followers