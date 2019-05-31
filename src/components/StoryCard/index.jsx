import React from 'react';
import styled from 'styled-components';
import { Draggable } from 'react-beautiful-dnd';

// Components
import PublishedTime from '../../components/PublishedTime';

const Container = styled.div`
  background-color: ${props => props.isDragging ? '#effffc' : 'white'};
  border: 1px solid lightgrey;
  border-radius: 2px;
  padding: 0;
  margin-bottom: 8px;
  min-width: 10rem;
  max-width: 46rem;
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
                  <div className="
                      h-0
                      lg:h-40
                      lg:w-40
                      flex-none
                      bg-cover
                      text-center
                      overflow-hidden"
                       style={{backgroundImage: `url(${this.props.story.img})`}}
                       alt="Fill Murray"
                       title="Fill Murray">
                  </div>
                  <div className="
                      px-4
                      pb-3
                      pt-0
                      flex
                      flex-col
                      flex-1
                      justify-end
                      leading-normal">
                    <p className="
                    text-sm
                    text-white
                    flex
                    justify-end
                    block
                    m-0">
                      <span className={`
                          justify-end
                          px-1
                          py-1
                          rounded
                          text-xs
                          ${this.props.columnId === 'queue'
                          ? 'bg-errorRed'
                          : 'bg-successGreen'}
                          `}>{this.props.columnId === 'queue'
                          ? 'Not placed'
                          : this.props.index === 0
                              ? 'Hero story'
                              : `Slot ${this.props.index}`
                      }</span>
                    </p>
                    <div className="mb-0">
                      <div className="
                      font-bold
                      text-headlineDarkGray
                      text-sm
                      md:text-md
                      lg:text-lg
                      xl:text-xl
                      mb-0
                      py-1">{this.props.story.title}
                      </div>
                    </div>
                    <div className="flex items-center">
                      <div className="text-sm">
                        <p className="
                          text-xs
                          lg:text-sm
                          xl:text-md
                          text-infoTextGray
                          leading-none
                          my-0
                          pt-0">{this.props.story.author} </p>
                        <div className="
                          text-infoTextGray
                          text-xs
                          p-0
                          my-1
                          ">
                          <PublishedTime
                              classes="mb-0 mt-2"
                              time={this.props.story.publishedTime}
                          />
                        </div>
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
