import { getRandomBlockId } from "../../util/random";

/**
 * Interface for context block. block_id is optional for the slack API. but to provide is recommended as to access the data within the context block will require the block_id. If not provided, a random value will be returned by slack block-kit api.
 */
declare interface CONTEXT {
  type: 'context',
  elements: Object[],
  block_id: string
};

/**
 * 
 * @param {Object[]} elements an array of block elements to be rendered 
 * @param {string} block_id [Optional]the unique id with which this block can be accessed in the payload. Will return random alphaumeric sequence for block id if not provided.
 * @returns {Object} object of type CONTEXT
 */
const getContextBlock = (elements: Object[], block_id?: string): CONTEXT => {
  return {
    type: 'context',
    elements: [...elements],
    block_id: block_id || getRandomBlockId(5)
  };
}

export { CONTEXT, getContextBlock };
