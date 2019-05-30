import React from 'react';
import styled from 'styled-components';
import { Draggable } from 'react-beautiful-dnd';

// Components
import PublishedTime from '../../components/PublishedTime';

const Container = styled.div`
  background-color: white;
  border: 1px solid lightgrey;
  border-radius: 2px;
  padding: 8px;
  margin-bottom: 8px;
`;

export default class StoryCard extends React.Component {
  render() {
    return (
        <Draggable draggableId={this.props.story.id} index={this.props.index}>
          {provided => (
              <Container
                  {...provided.draggableProps}
                  {...provided.dragHandleProps}
                  ref={provided.innerRef}
              >
                {this.props.story.title}
              </Container>
          )}
        </Draggable>
    )
  }
}
