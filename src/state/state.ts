import { QueryClient } from 'react-query';

import { InputActionType, SetInitialNotesCommand } from '../scenario/types';
import { GetInitialNotesCommand, Note } from '../types/todo';

import { useAssistantQuery } from './assistantReactQuery';

export const queryClient = new QueryClient();

export function addNote(note: string) {
    queryClient.setQueryData<Note[]>('notes', (oldNotes = []) => [
        ...oldNotes,
        {
            id: Math.random().toString(36).substring(7),
            title: note,
            completed: false,
        },
    ]);
}

export function markNoteDone(noteId: string) {
    queryClient.setQueryData<Note[]>('notes', (oldNotes = []) => {
        return oldNotes.map((todo) => (todo.id === noteId ? { ...todo, completed: true } : todo));
    });
}

function deleteNote(noteId: string) {
    queryClient.setQueryData<Note[]>('notes', (oldNotes = []) => oldNotes.filter(({ id }) => id !== noteId));
}

export function smartAppDataHandler(action: InputActionType) {
    switch (action.type) {
        case 'done_note':
            markNoteDone(action.payload.id);
            break;
        case 'add_note':
            addNote(action.payload.note);
            break;
        case 'delete_note':
            deleteNote(action.payload.id);
            break;

    }
}

export function useInitialNotes() {
    return useAssistantQuery<GetInitialNotesCommand, SetInitialNotesCommand>(
        { type: 'notes' },
        { refetchOnWindowFocus: false },
    );
}


interface State {
    curr1: string
    curr2: string,
    num1: number,
    num2: number,
    rate: number
}

const initialState: State = {
    curr1: '',
    curr2: '',
    num1: 0,
    num2: 0,
    rate: 1
}

const reducer = (state: State, action: {type: string, payload: any}) => {
    switch(action.type) {
        case 'update':
        return {
            curr1: action.payload.curr1,
            curr2: action.payload.curr2,
            num1: action.payload.num1,
            num2: action.payload.num2,
            rate: action.payload.rate,
        }      
        default:
        return state  
    }
}