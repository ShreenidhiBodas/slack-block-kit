declare interface DIVIDER {
  type: 'divider',
  block_id: string
};

const getDividerBlock = (block_id: string): DIVIDER => {
  return {
    type: 'divider',
    block_id
  };
};

export { DIVIDER, getDividerBlock };