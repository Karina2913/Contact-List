import { useState } from 'react'
import './App.css'
import ContactList from './components/ContactList.jsx'
import SelectedContact from "./components/SelectedContact"

export default function App () {
  const [selectedContactId, setSelectedContactId] = useState(null);

  return (
    <>
      {selectedContactId ? (
        <SelectedContact selectedContactId={selectedContactId} />
      ) : (
        <ContactList />
      )}
    </>
  );
}