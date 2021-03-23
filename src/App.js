import React, { useState, useEffect } from 'react';
import './App.css';
import { API } from 'aws-amplify';
import { withAuthenticator, AmplifySignOut } from '@aws-amplify/ui-react';
import { listNotes } from './graphql/queries';
import { createNote as createNoteMutation, deleteNote as deleteNoteMutation } from './graphql/mutations';

import NavBar from './NavBar'

import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import { Paper } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import AdvertiserForm from './AdvertiserForm';


const initialFormState = { name: '', description: '' }

function App() {
  const [notes, setNotes] = useState([]);
  const [formData, setFormData] = useState(initialFormState);

  useEffect(() => {
    fetchNotes();
  }, []);

  async function fetchNotes() {
    const apiData = await API.graphql({ query: listNotes });
    setNotes(apiData.data.listNotes.items);
  }

  async function createNote() {
    if (!formData.name || !formData.description) return;
    await API.graphql({ query: createNoteMutation, variables: { input: formData } });
    const Http = new XMLHttpRequest();
    const url = 'https://cors-anywhere.herokuapp.com/https://hooks.slack.com/services/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';
    Http.open("POST", url, true);
    Http.setRequestHeader('Content-Type', 'application/json');
    Http.send("Some message");
    console.log(url)
    setNotes([ ...notes, formData ]);
    setFormData(initialFormState);
  }

  async function deleteNote({ id }) {
    const newNotesArray = notes.filter(note => note.id !== id);
    setNotes(newNotesArray);
    await API.graphql({ query: deleteNoteMutation, variables: { input: { id } }});
  }
  const useStyles = makeStyles((theme) => ({
    root: {
      display: 'flex',
      flexWrap: 'wrap',
      '& > *': {
        margin: theme.spacing(1),
        width: theme.spacing(100),
      },
    },
  }));
  return (
    <div className="App">
      <NavBar/>
      <div className={useStyles().root} style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center"
        }}>
        
        <Paper elevation = {3} style={{padding:20}}>
          <AdvertiserForm/>
        </Paper>
        
      </div>

      <AmplifySignOut />
    </div>
  );
}

export default withAuthenticator(App);