/** Dispatch event on click outside of node */
import type { Action } from 'svelte/action'

interface Attributes {
  'on:clickOutside'?: (event: CustomEvent) => void
}

export const clickOutside: Action<HTMLElement, any, Attributes> = (node) => {
  const handleClick = (event: MouseEvent) => {
    if (!node || node.contains(event.target as HTMLElement) || event.defaultPrevented) {
      return
    }

    const clickOutsideEvent = new CustomEvent('clickOutside', {
      detail: 'Detects a click outside of an element'
    })

    node.dispatchEvent(clickOutsideEvent)
  }

  document.addEventListener('click', handleClick, true)

  return {
    destroy() {
      document.removeEventListener('click', handleClick, true)
    }
  }
}
