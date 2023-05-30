import {Component} from 'react'
import {
  Meme,
  Text,
  Heading,
  Form,
  InputCard,
  MainContainer,
  Label,
  Input,
  Select,
  GenerateButton,
} from './styledComponents'

const fontSizesOptionsList = [
  {
    optionId: '8',
    displayText: '8',
  },
  {
    optionId: '12',
    displayText: '12',
  },
  {
    optionId: '16',
    displayText: '16',
  },
  {
    optionId: '20',
    displayText: '20',
  },
  {
    optionId: '24',
    displayText: '24',
  },
  {
    optionId: '28',
    displayText: '28',
  },
  {
    optionId: '32',
    displayText: '32',
  },
]
export default class MemeGenerator extends Component {
  state = {
    inputUrl: '',
    inputTopText: '',
    inputBottomText: '',
    fontSize: '',
  }

  onChangeFontSize = e => {
    this.setState({fontSize: e.target.value})
  }

  onInputBottomText = e => {
    this.setState({inputBottomText: e.target.value})
  }

  onInputTopText = e => {
    this.setState({inputTopText: e.target.value})
  }

  onInputUrl = e => {
    this.setState({inputUrl: e.target.value})
  }

  onGenerateMeme = e => {
    e.preventDefault()
    this.setState(prevState => ({
      inputBottomText: prevState.inputBottomText,
      inputTopText: prevState.inputTopText,
      inputUrl: prevState.inputUrl,
      fontSize: prevState.fontSize,
    }))
  }

  renderMeme = () => {}

  render() {
    const {inputBottomText, inputTopText, inputUrl, fontSize} = this.state
    console.log(fontSize)
    return (
      <MainContainer>
        <InputCard>
          <Heading>Meme Generator</Heading>
          <Form onSubmit={this.onGenerateMeme}>
            <Label htmlFor="url">Image Url</Label>
            <Input
              type="text"
              id="url"
              value={inputUrl}
              onChange={this.onInputUrl}
              placeholder="Enter the Image URL"
            />
            <Label htmlFor="top">Top Text</Label>
            <Input
              type="text"
              id="top"
              value={inputTopText}
              onChange={this.onInputTopText}
              placeholder="Enter the Top Text"
            />
            <Label htmlFor="bottom">Bottom Text</Label>
            <Input
              type="text"
              id="bottom"
              value={inputBottomText}
              onChange={this.onInputBottomText}
              placeholder="Enter the Bottom Text"
            />
            <Label htmlFor="fonts">Font Size</Label>
            <Select id="fonts" onChange={this.onChangeFontSize}>
              {fontSizesOptionsList.map(each => (
                <option value={each.optionId} key={each.optionId}>
                  {each.displayText}
                </option>
              ))}
            </Select>
            <div>
              <GenerateButton type="submit">Generate</GenerateButton>
            </div>
          </Form>
        </InputCard>
        <Meme data-testid="meme" bgImg={inputUrl}>
          <Text textSize={`${fontSize}px`}>{inputTopText}</Text>
          <Text textSize={`${fontSize}px`}>{inputBottomText}</Text>
        </Meme>
      </MainContainer>
    )
  }
}
