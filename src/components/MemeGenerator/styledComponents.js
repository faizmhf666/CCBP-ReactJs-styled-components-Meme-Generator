import styled from 'styled-components'

export const Meme = styled.div`
  padding: 10px;
  margin-right: 20px;
  margin-top: 40px;
  border-radius: 4px;
  border: 2px solid transparent;
  display: flex;
  background-image: url(${props => props.bgImg});
  background-size: cover;
  justify-content: space-between;
  align-items: center;
  height: 720px;
  width: 854px;
  flex-direction: column;
  align-self: center;
`
export const Text = styled.p`
  font-size: ${props => props.textSize};
  color: #ffffff;
  padding: 10px;
  margin-right: 20px;
`
export const Heading = styled.h1`
  color: #35469c;
  font-size: 42px;
  font-family: 'Open Sans';
`
export const InputCard = styled.div`
  display: flex;
  flex-direction: column;
`
export const Form = styled.form`
  display: flex;
  flex-direction: column;
`
export const MainContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  flex-wrap: wrap;
  background-color: #d7dfe9;
  background-size: cover;
  height: 100vh;
`
export const Label = styled.label`
  font-family: 'Open Sans';
  margin-top: 10px;
  color: #7e858e;
`
export const Input = styled.input`
  border: 0.5px solid #7e858e;
  padding: 10px;
  border-radius: 6px;
  margin-bottom: 10px;
`
export const Select = styled.select`
  border: 0.5px solid #7e858e;
  padding: 10px;
  border-radius: 6px;
  margin-bottom: 10px;
`
export const GenerateButton = styled.button`
  background-color: #0b69ff;
  border: 0px solid #0b69ff;
  color: #ffffff;
  padding: 10px;
  border-radius: 8px;
  cursor: pointer;
`
