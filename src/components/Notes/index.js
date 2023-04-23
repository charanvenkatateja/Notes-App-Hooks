// Write your code here

import {useState} from 'react'

import {v4} from 'uuid'

import NoteItem from '../NoteItem'

import {
  MainContainer,
  Heading,
  FormContainer,
  Input,
  Textarea,
  AddButton,
  UnListCont,
  EmptyContainer,
  EmptyImg,
  EmptyPara,
  EmptyPara2,
} from './styledComponents'

const Notes = () => {
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  const [notesList, setNotesList] = useState([])

  const onChangeTitle = e => {
    setTitle(e.target.value)
  }

  const onChangeDescription = e => {
    setDescription(e.target.value)
  }

  const onSubmitForm = event => {
    event.preventDefault()
    const newNote = {
      id: v4(),
      title,
      description,
    }

    setNotesList(prev => [...prev, newNote])
    setTitle('')
    setDescription('')
  }

  return (
    <MainContainer>
      <Heading>Notes</Heading>
      <FormContainer onSubmit={onSubmitForm}>
        <Input
          type="text"
          value={title}
          placeholder="Title"
          onChange={onChangeTitle}
        />
        <Textarea
          value={description}
          rows="4"
          placeholder="Take a Note..."
          onChange={onChangeDescription}
        />

        <AddButton type="submit">Add</AddButton>
      </FormContainer>
      {notesList.length > 0 ? (
        <UnListCont>
          {notesList.map(each => (
            <NoteItem details={each} key={each.id} />
          ))}
        </UnListCont>
      ) : (
        <EmptyContainer>
          <EmptyImg
            src="https://assets.ccbp.in/frontend/hooks/empty-notes-img.png"
            alt="notes empty"
          />
          <EmptyPara>No Notes Yet</EmptyPara>
          <EmptyPara2>Notes you add will appear here</EmptyPara2>
        </EmptyContainer>
      )}
    </MainContainer>
  )
}

export default Notes
