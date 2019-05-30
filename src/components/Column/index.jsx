import React from 'react';
import styled from 'styled-components';
import { Droppable } from 'react-beautiful-dnd';

// Components
import StoryCard from '../StoryCard';

const Container = styled.div``;
const Title = styled.h3``;
const StoryList = styled.div``;

export default class Column extends React.Component {
  render() {
    return <Container>
      <Title>
        {this.props.column.title}
      </Title>
      <Droppable droppableId={this.props.column.id}>
        {provided => (
            <StoryList
                {...provided.droppableProps}
                ref={provided.innerRef}
            >
              {this.props.stories.map((story, index) => <StoryCard key={story.id} story={story} index={index} />)}
              {provided.placeholder}
            </StoryList>
        )}
      </Droppable>
    </Container>;
  }
}