class App extends React.Component{
  
  constructor(props){
    super(props);
    this.handleRemoveAll = this.handleRemoveAll.bind(this);
    this.handleAddData = this.handleAddData.bind(this);
    this.state = {
      options : ['one', 'two', 'three']
    }
  }
  
  handleRemoveAll(){
    this.setState(()=>{
      return {
        options: []
      }
    });
  }
  handleAddData(option){
    this.setState((prevSatate)=>{
      return {
        options : prevSatate.options.concat(option)
      }
    })
    console.log(option)
  }
  render(){
    return (
    <div>
    <h1>Title</h1>
    <Header title = 'Jai Hind Dosto' />
    <Action />
    <Options opt = {this.state.options}
             handleRemoveAll = {this.handleRemoveAll}/>
    <AddOptions handleAddData = {this.handleAddData}/>
    </div>
    )
  }
}
class Header extends React.Component{
  render() {
    return <p>{this.props.title}</p>;
  }
}

class Action extends React.Component{
  render(){
    return <button> What should i do</button>
  }
}

class Options extends React.Component{
// have some doubt here
   render(){
     return (
       <div>
         <button onClick={this.props.handleRemoveAll}>Remove All</button>
         {
           this.props.opt.map((option)=> 
             <Option key = {option} optionvalue = {option}/>
           )
         }
      </div>
     );
   }
}

class Option extends React.Component{
   render(){
     return (
       <div>{this.props.optionvalue}</div>
     );
   }
}

class AddOptions extends React.Component{
  constructor(props){
    super(props);
    this.submitData = this.submitData.bind(this);
  }
   submitData(e) {
    e.preventDefault();
    var optionValue = e.target.elements.nameInput.value;

    if (optionValue) {
      this.props.handleAddData(optionValue);
      e.target.elements.nameInput.value = '';
    }
  }
  
  render(){
    return (
      <div>
        <form onSubmit = {this.submitData}>
          <input type="text" name = "nameInput"></input>
          <button>Add Task </button>
        </form>
      </div>
    );
  }
}
const jsx = (
  <App/>
);

ReactDOM.render(jsx, document.getElementById('app'));
