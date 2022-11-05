import React from "react"
import Story from "./Story"
import styled from "styled-components"
import getCode from "../country_code"
var url = require("url");
let country = url.parse(document.URL).pathname
country = country.substring(1).replaceAll('%20',' ')
let a2 = getCode(country)
let flagURL = `https://flagcdn.com/${a2}.svg`
country = country.replaceAll(" ", "_");
let historyURL = `https://en.wikipedia.org/wiki/${country}#History`
let foodURL = `https://en.wikipedia.org/wiki/${country}#Cuisine`
let musicURL = `https://en.wikipedia.org/wiki/${country}#Music`
let geoURL = `https://en.wikipedia.org/wiki/${country}#Geography`


const Stories = () => {
    return (
        <StoriesWrapper>
            <Story image="https://images.unsplash.com/photo-1472173148041-00294f0814a2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2940&q=80"
profileSrc={flagURL}
title="History"
url={historyURL}
/>
<Story
image="https://images.unsplash.com/photo-1526318896980-cf78c088247c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8YXNpYW4lMjBmb29kfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60"
profileSrc={flagURL}
title="Food"
url={foodURL}
/>
<Story
image="https://images.unsplash.com/photo-1603048588665-791ca8aea617?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8dmlueWx8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60"
profileSrc={flagURL}
title="Music"
url={musicURL}
/>
<Story
image="https://images.unsplash.com/photo-1614102073832-030967418971?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2069&q=80"
profileSrc={flagURL}
title="Geography"
url={geoURL}
/>
        </StoriesWrapper>
    )
}

const StoriesWrapper = styled.div`
    display: flex;
    margin: 0 auto;
`
export default Stories