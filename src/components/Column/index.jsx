import React from 'react';
import styled from 'styled-components';
import { Droppable } from 'react-beautiful-dnd';

// Components
import StoryCard from '../StoryCard';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: .05rem 1rem;
  width: 40rem;
`;

const Title = styled.h3`
   font-weight: 900;
`;

const StoryList = styled.div`
  background-color: ${props => (props.isDraggingOver ? '#ffe5fc' : 'white')};
  flex-grow: 1;
  min-height: 10rem;  /* So there's always a place to drag-and-drop. */
  padding: 2rem;
  transition: background-color 0.2s ease;
`;

export default class Column extends React.Component {
  render() {
    return <Container>
      <Title>
        {this.props.column.title}
      </Title>
      <Droppable droppableId={this.props.column.id}>
        {(provided, snapshot) => (
            <StoryList
                {...provided.droppableProps}
                ref={provided.innerRef}
                isDraggingOver={snapshot.isDraggingOver}
            >
              {this.props.stories.map((story, index) =>
                  <StoryCard
                      columnId={this.props.column.id}
                      key={story.id}
                      story={story}
                      index={index}
                  />)}
              {provided.placeholder}
            </StoryList>
        )}
      </Droppable>
    </Container>;
  }
}