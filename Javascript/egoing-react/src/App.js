import React, {Component} from 'react';
import './App.css';
import TOC from './components/TOC'
import Subject from './components/Subject'
import Content from './components/Content'

class Test extends Component {
  render() {
    return(
      <div>
        <h1>{this.props.title}</h1>
      </div>
    );
  }
}

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      mode:'read',
      selected_content_id:1,
      subject:{title:'WEB', desc:'World Wide Web!'},
      welcome:{title:'Welcome', desc:'Hello, React!!'},
      contents:[
        {id:1, title:'HTML', desc:'HTML is for information'},
        {id:2, title:'CSS', desc:'CSS is for information'},
        {id:3, title:'JavaScript', desc:'JavaScript is for information'}
      ]
    }
  }
  render() {
    var _title, _desc = null;
    if (this.state.mode === 'welcome') {
      _title = this.state.welcome.title;
      _desc = this.state.welcome.desc;
    } else if (this.state.mode === 'read') {
      var i = 0;
      while(i < this.state.contents.length) {
        var data = this.state.contents[i];
        if(data.id === this.state.selected_content_id) {
          _title = data.title;
          _desc = data.desc;
          break;
        }
        i++;
      }
    }
    return (
      <div className="App">
        <Subject 
          title={this.state.subject.title} 
          sub={this.state.subject.desc}
          onChangePage={function(){
            this.setState({mode:'welcome'});
          }.bind(this)}
        >
        </Subject>
        <TOC onChangePage={function(id){
          this.setState({
            mode:'read',
            selected_content_id:Number(id),
          });
        }.bind(this)} data={this.state.contents}></TOC>
        <Content title={_title} desc={_desc}>
        </Content>
        <Test title="Hellllllo"></Test>
      </div>
    );
  }
}

export default App;