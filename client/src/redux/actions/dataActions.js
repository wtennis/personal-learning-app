export function getData() {

    return (dispatch) => {
        fetch('/folders')
        .then(r=> {
          if (r.ok){
            r.json().then((data) => dispatch({ type: "data/getData", payload: data}));
          }
        })
        }
    }
    
export function renameItem(type, id, newName) {
    return (dispatch) => {
        fetch(`/${type.toLowerCase()+'s'}/${id}`, {
            method: "PATCH", 
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify({name: newName })
            })
            .then(r => {
                if (r.ok){
                    r.json().then((renamedItem) => dispatch({ type: `data/rename${type}`, payload: renamedItem}));
                }
            })
        }
    }

export function createFolder(name, emoji, isPublic, parent_id) {
    return (dispatch) => {
        fetch('/folders', { 
            method: "POST", 
            headers: { 
              "Content-Type": "application/json"
            },
            body: JSON.stringify({
              name: name,
              emoji: emoji,
              is_public: isPublic,
              parent_id: parent_id
            })
        })
        .then(r => {
            if (r.ok){
                r.json().then((newFolder) => dispatch({ type: "data/createFolder", payload: newFolder}));
            }
        })
        }
    }

export function createResource(name, emoji, url, parent_id) {
    return (dispatch) => {
        fetch('/resources', { 
            method: "POST", 
            headers: { 
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                name: name,
                emoji: emoji,
                url: url,
                parent_id: parent_id
            })
        })
        .then(r => {
            if (r.ok){
                r.json().then((newResource) => dispatch({ type: "data/createResource", payload: newResource}));
            }
        })
        }
    }

export function deleteItem(type, id) {
    return (dispatch) => {
        fetch(`${type.toLowerCase()+'s'}/${id}`, { method: "DELETE" })
        .then(() => dispatch({ type: `data/delete${type}`, payload: id}));  
        }
    }


export function updateNote(target, id, note) {
    return (dispatch) => {
        fetch(`/${target}/${id}`, {
            method: "PATCH", 
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify({note: note})
            })
            .then(r => {
                if (r.ok){
                    r.json().then((patchedItem) => dispatch({ type: "data/updateNote", payload: {id: id, note: patchedItem.note}}));
                }
            })
        }
    }
