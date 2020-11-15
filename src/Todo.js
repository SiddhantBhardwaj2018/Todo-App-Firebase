import React, {useState} from 'react'
import './Todo.css'
import { List, ListItem, ListItemText, ListItemAvatar, Modal, Button} from '@material-ui/core'
import db from './firebase';
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles((theme) => ({
    paper: {
        position:"absolute",
        width:400,
        backgroundColor: theme.palette.background.paper,
        border: '2px solid #000',
        boxShadow: theme.shadows[5],
        padding:theme.spacing(2,4,3)
    }
}))

const Todo = ({todo}) => {
    const classes = useStyles();
    const [open,setOpen] = useState(false);
    const [input, setInput] = useState('')

    const handleOpen = () => {
        setOpen(true)
    }

    const updateTodo = () => {
        db.collection('todos').doc(todo.id).set({
            todo: input
        },{ merge: true })
        setOpen(false)
    }

    

    return (
        <div>
            <Modal open={open} onClose={e => setOpen(false)}>
            <div className={classes.paper}>
                <h1>I am a model</h1>
                <input  placeholder = {todo.todo} value={input} onChange={e => {setInput(e.target.value)}} />
                <Button onClick = {updateTodo}>Update Button</Button>
            </div>
            </Modal>
            <List className = "todo__list">
                <ListItem>
                <ListItemAvatar>
                </ListItemAvatar>    
                    <ListItemText primary = {todo.todo} secondary = "Dummy Deadline ⏰" />
                </ListItem>
                <button onClick = {e => setOpen(true)}>Edit</button>
                <DeleteForeverIcon onClick = {e => db.collection('todos').doc(todo.id).delete()} />
            </List>
        </div>
    )
}

export default Todo
