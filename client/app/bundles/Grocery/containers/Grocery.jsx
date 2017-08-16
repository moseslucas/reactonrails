import PropTypes from 'prop-types';
import React from 'react';
import List from '../components/List';

export default class Grocery extends React.Component {

  /**
   * @param props - Comes from your rails view.
   * @param _railsContext - Comes from React on Rails
   */
  constructor(props, _railsContext) {
    super(props);

    // How to set initial state in ES6 class syntax
    // https://facebook.github.io/react/docs/reusable-components.html#es6-classes
    //this.state = { items: this.props.items };
		this.addItem = this.addItem.bind(this)
		this.state = { 
			items: ['apple','pagkain','tubig']
		}
  }

	addItem(s){ 
		let newItems = this.state.items
		newItems.push(s.item)
		this.setState({items: newItems})
	}

  render() {
    return (
      <div>
				<List items={this.state.items} submit={this.addItem}/>
      </div>
    );
  }
}
