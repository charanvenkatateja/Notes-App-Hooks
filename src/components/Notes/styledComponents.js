// Style your elements here

import styled from 'styled-components/macro'

export const MainContainer = styled.div`
  background-color: transparent;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const Heading = styled.h1`
  font-size: 30px;
  color: blue;
  font-weight: bold;
  font-family: 'Bree Serif';
`

export const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  padding: 13px;
  border: none;
  box-shadow: 0px 4px 0px 4px black;
  border-radius: 12px;
  background-color: transparent;
  height: 220px;
  width: 650px;
  margin-top: 20px;
`
export const Input = styled.input`
  background-color: transparent;
  border: none;
  border-radius: none;
  font-size: 12px;
  padding-left: 10px;
  height: 30px;
  margin-top: 10px;
`
export const Textarea = styled.textarea`
  background-color: transparent;
  border: none;
  border-radius: none;
  font-size: 12px;
  padding-left: 10px;

  margin-top: 10px;
`
export const AddButton = styled.button`
  background-color: blue;
  color: white;
  font-size: 14px;
  padding: 4px 12px 4px 12px;
  cursor: pointer;
  margin-top: 20px;
  align-self: flex-end;
  border: none;
  border-radius: 10px;
`
export const UnListCont = styled.ul`
  display: flex;
  flex-wrap: wrap;
  max-width: 650px;
  margin-top: 10px;
`
export const EmptyContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  margin-top: 30px;
`
export const EmptyImg = styled.img`
  height: 100px;
  width: 120px;
`
export const EmptyPara = styled.h1`
  font-size: 20px;
  font-weight: bold;
`
export const EmptyPara2 = styled.p`
  font-size: 10px;
`
