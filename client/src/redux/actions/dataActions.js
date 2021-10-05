export function getFolders() {

    return (dispatch) => {
        fetch('/folders')
        .then(r=> {
          if (r.ok){
            r.json().then((folders) => dispatch({ type: "data/getFolders", payload: folders}));
          }
        })
        }
    }

export function getResources() {
    return (dispatch) => {
        fetch('/resources')
        .then(r=> {
            if (r.ok){
            r.json().then((resources) => dispatch({ type: "data/getResources", payload: resources}));
            }
        })
        }
    }
    
export function renameItem(target, id, newName) {
    return (dispatch) => {
        fetch(`/${target}/${id}`, {
            method: "PATCH", 
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify({name: newName })
            })
            .then(r => {
                if (r.ok){
                    r.json().then((renamedItem) => dispatch({ type: "data/renameItem", payload: renamedItem}));
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