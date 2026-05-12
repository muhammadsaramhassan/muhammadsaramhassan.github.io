'use client'

import { useEffect } from 'react'

type ShortcutMap = Record<string, () => void>

export function useKeyboardShortcuts(shortcuts: ShortcutMap) {
  useEffect(() => {
    function handler(e: KeyboardEvent) {
      // Don't fire when typing in inputs/textareas
      const target = e.target as HTMLElement
      if (target.tagName === 'INPUT' || target.tagName === 'TEXTAREA') return
      if (e.metaKey || e.ctrlKey || e.altKey) return

      const action = shortcuts[e.key]
      if (action) {
        e.preventDefault()
        action()
      }
    }

    window.addEventListener('keydown', handler)
    return () => window.removeEventListener('keydown', handler)
  }, [shortcuts])
}
