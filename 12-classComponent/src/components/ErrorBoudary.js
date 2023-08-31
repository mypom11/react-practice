import { Component } from 'react'

class ErrorBoundary extends Component {
  constructor() {
    super()
    this.state = { hasError: false }
  }

  componentDidCatch(error) {
    this.setState({ hasError: true })
  }

  render() {
    if (this.state.hasError) {
      return <p>something wrong</p>
    }
    return this.props.childern
  }
}
export default ErrorBoundary
