class App extends React.Component{
  constructor(props){
    super(props);
    this.getDataFromAppChildOne = this.getDataFromAppChildOne.bind(this)
    this.getDataFromAppChildTwo = this.getDataFromAppChildTwo.bind(this)
    this.getDataFromAppChildThree = this.getDataFromAppChildThree.bind(this)
    this.state = {
      input1 : '',
      input2 : '',
      input3 : ''
    }
  }
  
  getDataFromAppChildOne(val){
    this.setState(()=>{
      return {
        input1 : val
      }
    })
  }
  
  getDataFromAppChildTwo(){
    const dataFromAppChildTwo = document.getElementById('inputValueTwo').value;
    this.setState(()=>{
      return {
        input2 : dataFromAppChildTwo
      }
    })
  }
  
getDataFromAppChildThree(){
  const dataFromAppChildThree = document.getElementById('inputValueThree').value;
  this.setState(()=>{
      return {
        input3 : dataFromAppChildThree
      }
    })
  
}
  
  render(){
     return(
       <div>
         <AppChildOne getDataFromAppChildOne = {this.getDataFromAppChildOne} disPlayDataofAppChildOne = {this.state.input1}/>
         <AppChildTwo getDataFromAppChildTwo = {this.getDataFromAppChildTwo} disPlayDataofAppChildTwo = {this.state.input2}/>
         <AppChildThree 
           getDataFromAppChildThree = {this.getDataFromAppChildThree}
           disPlayDataofAppChildOne = {this.state.input1}
           disPlayDataofAppChildTwo = {this.state.input2} 
           disPlayDataofAppChildThree = {this.state.input3}
          />
       </div>
     )
  }
}
class AppChildOne extends React.Component{
  constructor(props){
    super(props)
    this.handleAppChildOne = this.handleAppChildOne.bind(this);
  }
  
  handleAppChildOne(){
    const dataFromAppChildOne = document.getElementById('inputValueOne').value;
    this.props.getDataFromAppChildOne(dataFromAppChildOne)
  }
  
  render(){
    return(
    <div>
    <input id= "inputValueOne" type="text"></input>
    <button onClick={this.handleAppChildOne}>AppChildOne</button>
    <div>{this.props.disPlayDataofAppChildOne}</div>
    </div>
      );
  }
}

class AppChildTwo extends React.Component{
  render(){
    return(
    <div>
    <input id= "inputValueTwo" type="text"></input>
    <button onClick={this.props.getDataFromAppChildTwo}>AppChildTwo</button>
    <div>{this.props.disPlayDataofAppChildTwo}</div>
    </div>
    )
  }
}

class AppChildThree extends React.Component{
  constructor(props){
    super(props)
    this.handleAppChildThird = this.handleAppChildThird.bind(this)
    this.handleCheck = this.handleCheck.bind(this)
    this.state = {
      first : false,
      second : false,
      third : false
    }
  }
  handleAppChildThird(){
    const dataFromAppChildOne = document.getElementById('mySelect').value;
    if(dataFromAppChildOne=='first'){
      this.setState(()=>{
        return {
          first : true,
          second :false,
          third : false
        }
      })
    }else if(dataFromAppChildOne=='second'){
         this.setState(()=>{
        return {
          first : false,
          second :true,
          third : false
        }
      })        
    }
    else{
     this.setState(()=>{
        return {
          first : false,
          second :false,
          third : true
        }
      })
    }
  }
  
  handleCheck(){
     if(this.state.first){
       return this.props.disPlayDataofAppChildOne
     }else if(this.state.second){
       return this.props.disPlayDataofAppChildTwo
     }else if(this.state.third){
       return (
         <div>
           <input id= "inputValueThree" type="text"></input>
           <button onClick = {this.props.getDataFromAppChildThree}>AppChildThree</button>
           {this.props.disPlayDataofAppChildThree}
         </div>
       )
     }
  }
  render(){
    return(
      <div>
        <select id="mySelect">
        <option value="first">Get The First App Child Value</option>
        <option value="second">Get The Second App Child Value</option>
        <option value="own">I want my Own Value</option>
       </select>
       <button onClick= {this.handleAppChildThird}>Go</button>
        {this.handleCheck()}
      </div>
    )
  }
}

// class AppChildFourth extends React.Component{
// }
const jsx = (
  <App/>
)
ReactDOM.render(jsx, document.getElementById('app'));
