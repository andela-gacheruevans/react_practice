class Component extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    	name:'Start',
    	step:1
    }
  }
  
  componentWillMount() {
	alert('I am in componentWillMount ' + JSON.stringify(this.state))
	let newStep = this.state.step + 1
	this.setState({step: newStep})
  }

  componentDidMount() {
  	setTimeout(() => {
	  	alert('I am in componentDidMount ' + this.state.step)
		let newStepb = this.state.step + 1
		this.setState({step: newStepb})
		this.setState({name: 'Evans'})
  	}, 5000);
  }
  
  render() {
  	alert('I am in render ' + this.state.step)		
    return (
      	<div>
			<div>{this.state.name}</div>
		</div>
    );
  }
}ReactDOM.render(<Component />, document.getElementById('root'))
	