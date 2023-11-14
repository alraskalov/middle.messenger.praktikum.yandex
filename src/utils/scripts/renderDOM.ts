import Block from './Block/Block';

function renderDOM(query: string, block: Block) {
  const root = document.querySelector(query);

  root.prepend(block.getContent());

  block.dispatchComponentDidMount();

  return root;
}

export default renderDOM;
