import React, {useEffect, useState} from 'react';
import './App.css';

function Article(props) {
  return(
    <article>
      <h2>{props.title}</h2>
      {props.body}
    </article>
  );
}
function Header(props) {
  return(
    <header>
        <h1><a href="/" onClick={(e) => {
          e.preventDefault();
          props.onChangeMode();
        }}>{props.title}</a></h1>
    </header>
  );
}
function Nav(props) {
  const lis = [];
  for(let i = 0; i < props.topics.length; i++) {
    let t = props.topics[i];
    lis.push(<li key={t.id}><a id={t.id} href={'/read/'+t.id} onClick={(e) => {
      e.preventDefault();
      props.onChangeMode(Number(e.target.id));
    }}>{t.title}</a></li>);
  }
  return(
    <nav>
      <ol>
        {lis}
      </ol>
    </nav>
  );
}
function Create(props) {
  return(
    <article>
      <h2>Create</h2>
      <form onSubmit={(e) => {
        e.preventDefault();
        props.onCreate(e.target.title.value, e.target.body.value);
      }}>
        <p><input type="text" name="title" placeholder="title"></input></p>
        <p><textarea name="body" placeholder="description"></textarea></p>
        <p><input type="submit" value="create"></input></p>
      </form>
    </article>
  );
}
function Update(props) {
  return(
    <article>
      <h2>Update</h2>
      <form onSubmit={(e) => {
        e.preventDefault();
        props.onUpdate(e.target.title.value, e.target.body.value);
      }}>
        <p><input type="text" name="title" placeholder="title" defaultValue={props.title}></input></p>
        <p><textarea name="body" placeholder="description" defaultValue={props.body}></textarea></p>
        <p><input type="submit" value="update"></input></p>
      </form>
    </article>
  );
}
function App() {
  const [mode, setMode] = useState('WELCOME');
  const [id, setId] = useState(null);
  const [nextId, setNextId] = useState(4);
  const [topics, setTopics] = useState([
    {id:1, title:'html', body:'html is ...'},
    {id:2, title:'css', body:'css is ...'},
    {id:3, title:'javascript', body:'javascript is ...'},
  ])
  let content = null;
  let contextControl = null;
  if(mode === 'WELCOME') {
    content = <Article title="Welcome" body="Hello, WEB"></Article>;
  } else if(mode === 'READ') {
    let _title, _body = null
    var i = 0;
    while(i < topics.length) {
      if(id === topics[i].id) {
        _title = topics[i].title;
        _body = topics[i].body;
      }
      i++;
    }
    content = <Article title={_title} body={_body}></Article>;
    contextControl = <>
    <li><a href="/update" onClick={(e) => {
      e.preventDefault();
      setMode('UPDATE');
    }}>Update</a></li>
    <li><input type="button" value="delete" onClick={(e) => {
      const newTopics = [];
      for(let i = 0; i < topics.length; i++) {
        if(topics[i].id !== id) {
          newTopics.push(topics[i]);
        }
      }
      setTopics(newTopics);
      setMode('WELCOME');
    }}></input></li>
    </>
  } else if(mode === 'CREATE') {
    content = <Create onCreate={(_title, _body) => {
      let newTopics = [...topics];
      newTopics.push({id:nextId, title:_title, body:_body});
      setTopics(newTopics);
      setMode('READ');
      setId(nextId);
      setNextId(nextId + 1);
    }}></Create>
  } else if(mode === 'UPDATE') {
    let title, body = null;
    for(let i = 0; i < topics.length; i++) {
      if(id === topics[i].id) {
        title = topics[i].title;
        body = topics[i].body;
        break;
      }
    }
    content = <Update id={id} title={title} body={body} onUpdate={(_title, _body) => {
      const newTopics = [...topics];
      for(let i = 0; i < newTopics.length; i++) {
        if(id === newTopics[i].id) {
          newTopics[i].title = _title;
          newTopics[i].body = _body;
          break;
        }
      }
      setTopics(newTopics);
      setMode('READ');
    }}></Update>
  }
  return (
    <div>
      <Header title="WEB" onChangeMode={() => {
        setMode('WELCOME');
        setId(null);
      }}></Header>
      <Nav topics={topics} onChangeMode={(_id) => {
        setMode('READ');
        setId(_id)
      }}></Nav>
      {content}
      <ul>
        <li><a href="/create" onClick={(e) => {
          e.preventDefault();
          setMode('CREATE');
        }}>Create</a></li>
        {contextControl}
      </ul>
    </div>
  );
}

export default App;