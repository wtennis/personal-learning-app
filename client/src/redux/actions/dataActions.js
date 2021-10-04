export function getFolders() {
    return (dispatch) => {
        fetch('/folders')
        .then(r=> {
          if (r.ok){
            r.json().then((folders) => dispatch({ type: "folder/getFolders", payload: folders}));
          }
        })
        }
    }

export function getFolderContents(id) {
    return (dispatch) => {
        fetch(`/folder_contents/${id}`)
        .then(r=> {
        if (r.ok){
            r.json().then((contents) => dispatch({ type: "folder/getFolderContents", payload: {contents: contents, id: id}}));
        };
        })
        }
    }