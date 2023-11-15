import Block from './Block/Block';

function renderDOM(query: string, block: Block) {
  const root: HTMLElement = document.querySelector(query) as HTMLElement;

  root.prepend(block.getContent());

  block.dispatchComponentDidMount();

  return root;
}

export default renderDOM;
