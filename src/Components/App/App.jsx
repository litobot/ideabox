import { useState } from 'react';
import './App.css';
import Ideas from '../Ideas/Ideas';

function App() {
  const dummyIdeas = [
    { id: 1, title: 'Prank Travis', description: 'Stick googly eyets on all his stuff' },
    { id: 2, title: 'Make a secret password app', description: 'So you and your rideshare driver can both neither one of you is lying' },
    { id: 3, title: 'Learn a martial art', description: 'To exact vengeance upon my enemies' },
  ]
  const [ideas, setIdeas] = useState(dummyIdeas);
  const namify = "litobot";

  return (
    <main classname='App'>
      <h1>IdeaBox</h1>
      <Ideas name='Travis'/>
      <Ideas name={namify}/>
    </main>
  )
}

export default App;