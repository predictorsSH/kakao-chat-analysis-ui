import React from "react";


function FileUpload(props) {
    const {onChange } = props;

    return (
        <form>
            <div>
                <label>
                    <input type='file' onChange={onChange} />
                    
                </label>
            
            </div>
        </form>
    )

}

export default FileUpload;