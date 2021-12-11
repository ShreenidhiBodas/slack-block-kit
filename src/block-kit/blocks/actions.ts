import {getRandomBlockId } from '../../util/random';
/**
 * Interface for actions block. block_id is optional for the slack API. but to provide is recommended as to access the data within the actions block will require the block_id. If not provided, a random value will be returned by slack block-kit api.
 */
declare interface ACTIONS {
  type: 'actions',
  elements: Object[],
  block_id: string
};

/**
 * this method returns an object payload with the type set as 'actions' and block elements and block_id as the other parameters.
 * @param {Object[]} elements an array of block elements to be rendered
 * @param {string} block_id [Optional] the unique id with which this block can be accessed in the payload. Will return random alphaumeric sequence for block id if not provided.
 * @returns {ACTIONS} type of interface ACTIONS
 */
const getActionBlock = (elements: Object[], block_id?: string): ACTIONS => { 
  return {
    type: 'actions',
    elements: [...elements],
    block_id: block_id || getRandomBlockId(5)
  };
}

export { ACTIONS, getActionBlock }; 