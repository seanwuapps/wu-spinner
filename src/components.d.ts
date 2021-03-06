/**
 * This is an autogenerated file created by the Stencil build process.
 * It contains typing information for all components that exist in this project
 * and imports for stencil collections that might be configured in your stencil.config.js file
 */

import { WuSpinner as WuSpinner } from './components/wu-spinner/wu-spinner';

interface HTMLWuSpinnerElement extends WuSpinner, HTMLElement {
}
declare var HTMLWuSpinnerElement: {
  prototype: HTMLWuSpinnerElement;
  new (): HTMLWuSpinnerElement;
};
declare global {
  interface HTMLElementTagNameMap {
      "wu-spinner": HTMLWuSpinnerElement;
  }
  interface ElementTagNameMap {
      "wu-spinner": HTMLWuSpinnerElement;
  }
  namespace JSX {
      interface IntrinsicElements {
          "wu-spinner": JSXElements.WuSpinnerAttributes;
      }
  }
  namespace JSXElements {
      export interface WuSpinnerAttributes extends HTMLAttributes {
          mode?: string,
          color?: string,
        
          type?: string
      }
  }
}

