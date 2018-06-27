import React from 'react'
import styled from 'styled-components'
import moment from 'moment'

const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px 18px 20px 18px;
  background-color: #ffffff;
  box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.05);
  border-radius: 2px;
  overflow: hidden;
  margin-top: 25px;
  border-radius: 8px;
`

const Author = styled.h3`
  margin-bottom: 2px;
  color: ${props => props.theme.primaryColour};
`

const Subtitle = styled.span`
  font-size: 14px;
  margin-bottom: 10px;
  color: ${props => props.theme.textSecondary};
`

const Content = styled.span`
  font-size: 18px;
`

export default class CommentItem extends React.Component {
  render() {
    return (
      <Container>
        <Author>{this.props.comment.name}</Author>
        <Subtitle>
          Posted on{' '}
          {moment.unix(this.props.comment.timestamp).format('MMMM DD, YYYY')}
        </Subtitle>
        <Content>{this.props.comment.comment}</Content>
      </Container>
    )
  }
}
