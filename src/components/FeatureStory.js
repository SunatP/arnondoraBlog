import React from 'react'
import styled from 'styled-components'
import Link from 'gatsby-link'
import color from 'color'

import colours from '../utils/colours'

const SuperWrapper = styled.div`
  height: 100vh;
`

const Container = styled.div`
  display: flex;
  flex-direction: column;
  position: absolute;
  min-width: 100%;
  min-height: 100%;
  padding-left: 20px;
  padding-right:20px;
  padding-bottom: 20px;
  z-index: 2;
`
const ImgBackgroundControl = styled.div `
  height:100%;
  background: url(${props => props.thumbnail}) ${colours.primaryColour};
  background-size: cover;
  background-position:center;
  background-repeat: no-repeat;
  display: flex;
`

const Overlay = styled.div`
  position:absolute;
  top:0;
  left:0;
  min-width:100%;
  min-height:100%;
  background-color:rgba(0,0,0,0.4);
`

const HeadingText = styled.h1`
  line-height: 1.1;
  font-size: 2em;
  color:white;
  margin-top:20px;
  font-weight: 700;
  text-shadow: 0 2px 4px rgba(0,0,0,0.20);
`

const Excerpt = styled.div`
  color:white;
`
const ReadMoreButtonContainer = styled.div`
  margin-top:30px;
`
const ReadMoreButton = styled.a`
  background-color: ${colours.primaryColour};
  color:white;
  float: right;
  padding: 13px 14px 13px 14px;
  box-shadow: 0 2px 4px 0 rgba(0,0,0,0.20);
  border-radius: 2px;

  :hover {
    background-color: ${color(colours.primaryColour).darken(0.2).string()};
  }
`

export default class FeatureStory extends React.Component {
  render() {
    return(
      <SuperWrapper>
        <Container>

          <HeadingText>{this.props.headline}</HeadingText>
          <Excerpt>{this.props.excerpt}</Excerpt>
          <ReadMoreButtonContainer><ReadMoreButton>Read More</ReadMoreButton></ReadMoreButtonContainer>

        </Container>
        <Overlay/>
        <ImgBackgroundControl thumbnail={this.props.featureThumbnail}/>
      </SuperWrapper>
    )
  }
}