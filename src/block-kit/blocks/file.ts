import { getRandomBlockId } from "../../util/random"

/**
 * Interface for file block. block_id is optional for the slack API. but to provide is recommended as to access the data within the file block will require the block_id. If not provided, a random value will be returned by slack block-kit api.
 */
declare interface FILE {
  type: 'file',
  external_id: string,
  source: string,
  block_id?: string
}

/**
 * 
 * @param {string} external_id unique external id for this file
 * @param {string} source source for the file. remote
 * @param {string} block_id [Optional]the unique id with which this block can be accessed in the payload. Will return random alphaumeric sequence for block id if not provided.
 * @returns {Object} Object of type FILE
 */
const getFileBlock = (external_id: string, source: string, block_id?: string): FILE => {
  return {
    type: 'file',
    external_id,
    source,
    block_id: block_id || getRandomBlockId(5)
  }
}

export { FILE, getFileBlock };