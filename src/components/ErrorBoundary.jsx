import React from 'react'

export default class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props)
    this.state = { hasError: false, error: null }
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error }
  }

  componentDidCatch() {
    // Could send to logging service here
    // console.error(error, info)
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="p-12 max-w-3xl mx-auto text-center">
          <h2 className="text-2xl font-bold mb-4">Something went wrong.</h2>
          <p className="mb-6">An unexpected error occurred while rendering this section.</p>
          <pre className="text-xs text-left bg-deep-void/80 p-4 rounded text-red-300 overflow-auto">{String(this.state.error)}</pre>
        </div>
      )
    }

    return this.props.children
  }
}
