import React, { useEffect, useState } from "react";
import axios from "axios";
import Stories from "./Stories";
import styled from "styled-components";
import Messenger from "./Messenger";
import Post from "./Post";
import Pusher from 'pusher-js'
var url = require("url");
let country = url.parse(document.URL).pathname
country = country.substring(1).replaceAll('%20',' ')

const countryN = country
const pusher = new Pusher('aedcf8269706b7325736', {
cluster: 'eu'
});

const Feed = () => {
  const [postsData, setPostsData] = useState([]);
  // const queryParams = {
  //   countryName: country,
  // };
  // const params = new HttpParams(queryParams)
  // let params = new HttpParams()
  // .set('countryName', {country});

  const syncFeed = () => {
    // const res = await axios.get('https://httpbin.org/get', { params: { answer: 42 } });
    console.log(countryN)
    axios.get(`http://localhost:9000/posts`, { params: {countryName : {countryN}}}).then((res) => {
      console.log(res.data);
      setPostsData(res.data);
    });
  };
  useEffect(() => {
    const channel = pusher.subscribe('posts');
    channel.bind('inserted', (data) => {
    syncFeed()
    });
    },[])
  useEffect(() => {
    syncFeed();
  }, []);
  return (
    <FeedWrapper>
        <h1>Welcome to {country.toUpperCase()}</h1>
      <Stories />
      <Messenger
        country ={country}
      />
      {
        postsData.map(entry => (
          <Post
            profilePic={entry.avatar}
            message={entry.text}
            timestamp={entry.timestamp}
            imgName={entry.imgName}
            username={entry.user}
          /> 
        ))
      }
    </FeedWrapper>
  );
};
const FeedWrapper = styled.div`
flex: 1;
padding: 30px 150px;
display: flex;
max-width: 2000px;
flex-direction: column;
align-items: center;
h1{
    color: white;
}
`
export default Feed;
