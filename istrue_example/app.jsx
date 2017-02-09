var ComponentOneA = React.createClass({
    istrue:true,
    render(){
        return(
            <div>
                <h1 style={{color:'#F76F00'}}>Es5 Implementation </h1>
                <div style={{color:'#000'}}>
                    <p>Is True exercise.</p>
                    { this.istrue ? <p>This is true</p> :<p>This is false</p> }
                </div>
            </div>
        )
    }
})
ReactDOM.render(<ComponentOneA />, document.getElementById('root'))