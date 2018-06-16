import React from "react";
import Time from "./time";
import FristContent from "./frist_content";
import Video from "./video";
import SecondContent from "./second_content";
import Social from "./social";
import ToHome from "./toHome";
import ReadMore from "../Shared/ReadMore";
import axios from "axios";
import { withRouter } from 'react-router-dom'

class articleContent extends React.Component {
  constructor(props) {
    super();
    this.aid = props.match.params.aid;
  }
  state = {
    title: "loading..",
    authorName: "",
    datePublished: "",
    articleBody: "",
    imageUrl: "",
    videoUrl: ""
  }
  componentDidMount(){
    axios.get(`http://localhost:5000/article/${this.aid}`).then(res =>{
      console.log('====================================');
      console.log(res.data);
      console.log('====================================');
     if(res.data) this.setState(res.data);
     else this.props.history.push('/404');
    });
  }
  render() {
    return (
        <div className="mycontainer" style={{marginTop:'200px'}} >
          <p className="bold head" style={{fontSize:30}}>
            {this.state.title}
          </p>
          <Time authorName={this.state.authorName} date={this.state.datePublished} imageUrl={this.state.imageUrl} />
          <hr />
          <FristContent text={this.state.articleBody} />
          {/* <Video /> */}
          <SecondContent />
          <Social />
          <ToHome />
          <ReadMore />
        </div>
    );
  }
}

export default articleContent;
