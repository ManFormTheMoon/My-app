import React, { FunctionComponent, useState } from 'react'
import Logo from '../logo.svg'

interface Ipost {
    onAdd(title : string) : void
}

export const NewPostForm:FunctionComponent<Ipost> = (props) => {
    const [post, setPost] = useState<string>('');

    const changeHandler = (event:React.ChangeEvent<HTMLInputElement>) => {
        setPost(event.target.value);
    }

    const keyPressHandler = (event:React.KeyboardEvent) => {
        if (event.key === "Enter") {
            props.onAdd(post);
            setPost("");
        }
    }
    const onClickAddHandler = (event:React.MouseEvent) => {
        props.onAdd(post);
        setPost("");
    }


    return (
        <div className = "new-post-container">
            <div className ="input-field">
                <input onChange={changeHandler} value={post} type="text" id="title-field" onKeyPress={keyPressHandler}/>
                <label htmlFor="title-field" className="active" >What's new?</label>
            </div>
            <img src={Logo} className="add-post-button" onClick={onClickAddHandler}/>
        </div>
    );

}