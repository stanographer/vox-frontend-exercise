import React from 'react';
import styled from 'styled-components';
import { Draggable } from 'react-beautiful-dnd';

// Components
import PublishedTime from '../../components/PublishedTime';

const Container = styled.div`
  background-color: ${props => props.isDragging ? '#effffc' : 'white'};
  border: 1px solid lightgrey;
  border-radius: 2px;
  padding: 8px;
  margin-bottom: 8px;
  min-width: 20rem;
  max-width: 45rem;
`;

export default class StoryCard extends React.Component {
  render() {
    return (
        <Draggable draggableId={this.props.story.id} index={this.props.index}>
          {(provided, snapshot) => (
              <Container
                  {...provided.draggableProps}
                  {...provided.dragHandleProps}
                  ref={provided.innerRef}
                  isDragging={snapshot.isDragging}
              >
                <div className="
                max-w-sm
                w-full
                lg:max-w-full
                lg:flex">
                  <div
                      className="
                      h-20
                      lg:h-32
                      lg:w-32
                      flex-none
                      bg-cover
                      rounded-t
                      lg:rounded-t-none
                      lg:rounded-l
                      text-center
                      overflow-hidden"
                      style={{backgroundImage: `url(${this.props.story.img})`}} title="Fill Murray">
                  </div>
                  <div
                      className="
                      px-4
                      py-2
                      flex
                      flex-col
                      justify-end
                      leading-normal">
                    <div className="mb-0">
                      <div className="
                      font-bold
                      text-xl
                      mb-0
                      py-1">{this.props.story.title}
                      </div>
                    </div>
                    <div className="flex items-center">
                      <div className="text-sm">
                        <p className="
                          text-infoTextGray
                          leading-none
                          my-0
                          pt-1">{this.props.story.author}</p>
                        <p className="
                          text-infoTextGray
                          p-0
                          my-1
                          ">
                          <PublishedTime time={this.props.story.publishedTime} />
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </Container>
          )}
        </Draggable>
    );
  }
}
