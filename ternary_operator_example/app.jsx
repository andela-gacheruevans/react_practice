class Gender extends React.Component{
    render(){
        let m = 'male'
        var arr =   [
                        {name:'Evans', m:'male'},
                        {name:'Jackie', m:'female'},
                        {name:'Collins', m:'male'}
                    ]
        return(
            <div>
                <h1>List of People and their Gender.</h1>
                <div>
                    <p>list of Guys</p>
                    {arr.map(value, index => 
                        {
                        return value.m === 'male'?  <li key={index}>{value.name} is a male.</li> : <li key={index}>{value.name} is a female.</li>
                        )}
                    }
                </div>
            </div>
        );
    

    }
}
ReactDOM.render(<Gender />, document.getElementById('root'))


class ComponentOne extends React.Component{
    render(){
        let m = 'male';
        var arr = [1,2,3,4,5]
        return(
            <div style={{borderBottom: '1px solid #333'}}>
                <h1 style={{color:'#85E023'}}>{1+1}Es6 Implementation</h1>
                <div>
                    <p>Component Two.</p>
                    { m ='male' ? <p>This is a male</p> :<p>This is a female</p> }
                    <ol>{values}</ol>
                </div>
            </div>
        );
    }
}
ReactDOM.render(<ComponentOne />, document.getElementById('root'))


 
