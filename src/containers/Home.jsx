import React, {Component} from 'react';
import { Button, Icon, Container, Header } from 'semantic-ui-react'
import Mnemonic from 'bitcore-mnemonic';

const ContainerText = (props) => {
  const phrase = props.phrase;
  const phraseJoined = phrase.split(' ').join('');
  return (
  <Container text>
    <Header as='h2'>Secure Password Maker</Header>
      <Button color='blue' onClick={props.regeneratePhrase}>
        <Icon name='refresh'/>
        Regenerate
      </Button>
    <p>
      {phrase}
    </p>
    <p>
      {phraseJoined}
    </p>
  </Container>
  )
}

class Home extends Component {
  constructor() {
    super();
    const phrase = this.generatePhrase();
    this.state = {
      phrase
    }
  }
  regeneratePhrase() {
    const phrase = this.generatePhrase();
    this.setState({
      phrase
    })
  }
  generatePhrase() {
    const code = new Mnemonic();
    return code.toString();
  }
  render() {
    return (<ContainerText regeneratePhrase={()=>{this.regeneratePhrase()}} phrase={this.state.phrase}/>);
  }
}

export default Home;
