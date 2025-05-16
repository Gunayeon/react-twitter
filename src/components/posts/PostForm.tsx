import { FiImage } from "react-icons/fi";
import { JSX } from "react";
export default function PostForm() {
    const FileImage = FiImage as unknown as (props: any) => JSX.Element;
    const handleFileUpload = () => {

    }
    return (
        <form className="post-form">
            <textarea 
                className="post-form__textarea" 
                required name="content" 
                id="content"
                placeholder="What is happening?"
            />
            <div className="post-form__submit-area">
                <label htmlFor='file-input' className='post-from__file'>
                    <FileImage className="post-form__file-icons" />
                </label>
                <input 
                    type="file" 
                    name="file-input" 
                    accept="image/*" 
                    onChange={handleFileUpload}
                    className="hidden"
                />
                <input type="submit" value="Tweet" className="post-form__submit-btn"/>
            </div>
        </form>
    )
}