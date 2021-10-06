
export function createNote(content, parent_type, parent_id) {
    return (dispatch) => {
        fetch(`/notes`, { 
            method: "POST", 
            headers: { 
              "Content-Type": "application/json"
            },
            body: JSON.stringify({
              text: content,
              belongsable_type: parent_type,
              belongsable_id: parent_id
            })
        })
        .then(r => {
            if (r.ok){
                r.json().then((note) => dispatch({ 
                    type: parent_type == "Resource"? "data/createResourceNote" : "data/createFolderNote", 
                    payload: {
                        note: note, 
                        id: parent_id
                    }
                }));
            }
        })
        }
    }


export function updateNote(note_id, parent_id, text) {
    return (dispatch) => {
        fetch(`/notes/${note_id}`, { 
                method: "PATCH", 
                headers: { 
                  "Content-Type": "application/json"
                },
                body: JSON.stringify({
                  text: text,
                })
            })
        .then(r => {
            if (r.ok){
                r.json().then((note) => dispatch({ 
                    type: "data/updateNote", 
                    payload: {
                        parent_id: parent_id,
                        text: text
                    }
                }));
            }
        })
        }
    }