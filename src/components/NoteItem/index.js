// Write your code here
import {ListCont, ParaLi, ParaLi2} from './styledComponents'

const NoteItem = props => {
  const {details} = props
  const {title, description} = details

  return (
    <ListCont>
      <ParaLi>{title}</ParaLi>
      <ParaLi2>{description}</ParaLi2>
    </ListCont>
  )
}
export default NoteItem
