import PropTypes from 'prop-types';
import React from 'react';

export default class List extends React.Component {
	/*
  static propTypes = {
    name: PropTypes.string.isRequired, // this is passed from the Rails view
  };
	*/

  /**
   * @param props - Comes from your rails view.
   * @param _railsContext - Comes from React on Rails
   */

  constructor(props, _railsContext) {
    super(props);
		this.renderMain = this.renderMain.bind(this)
		this.handleChange = this.handleChange.bind(this)
		this.handleSubmit = this.handleSubmit.bind(this)
		this.clear = this.clear.bind(this)
		this.state = {item: ''}
  }

	card(item,i){ 
		return( 
			<li key={i}>{item}</li>
		)
	}

	handleChange(e){ 
		this.setState({[e.target.name]: e.target.value})
	}

	handleSubmit(){ 
		this.props.submit(this.state)
		this.clear()
	}

	clear(){ 
		this.setState({item: ''})
	}

	renderMain(){ 
		return( 
			<div>
				<div>
					<input value={this.state.item} 
						onChange={this.handleChange} 
						name="item" 
						placeholder="Input Item" />
					<button onClick={this.handleSubmit}>Add</button>
				</div>
				{this.props.items.map(this.card)}
			</div>
		)
	}

  render() {
		return this.renderMain()
  }
}
