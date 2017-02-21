class ComponentOne extends React.Component{
	render(){
		return(
			<div style={{borderBottom: '1px solid #333'}}>
				<h1 style={{color:'#85E023'}}>Validation isRequired</h1>
				<div>
					{this.props.name} &nbsp; {this.props.number}
				</div>
			</div>
		);
	}
}
ComponentOne.propTypes = {
   name: React.PropTypes.string.isRequired,
   number: React.PropTypes.number.isRequired
};
ReactDOM.render(<ComponentOne name='Evans' number={15}/>, document.getElementById('root'))

