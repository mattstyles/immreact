
import {createSelector} from 'reselect'

import {getHistory, createListener} from './history'
import {DEFAULT_KEY} from './update'

const {Component} = require(`${process.env.BABEL_ENV}/component.js`)
const {createRoute} = require(`${process.env.BABEL_ENV}/routes.js`)

const getProps = createSelector(
  props => props,
  props => props[props.root],
  ({children}, navigation) => ({
    children,
    navigation
  })
)

class Navigator extends Component {
  static defaultProps = {
    signal: null,
    history: null,
    root: DEFAULT_KEY,
    navigation: {}
  }

  componentWillMount () {
    this.history = getHistory(this.props.history)
    this.disposeHistory = this.history
      .listen(createListener(this.props.signal, this.props.history))
  }

  componentWillUnmount () {
    if (this.disposeHistory) {
      this.disposeHistory()
    }
  }

  render () {
    const {children, navigation} = getProps(this.props)
    const {stack, index} = navigation
    const match = createRoute(children, stack[index])
    return (
      <div>{match}</div>
    )
  }
}

export default Navigator
