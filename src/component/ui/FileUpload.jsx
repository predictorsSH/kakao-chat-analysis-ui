import React from "react";
import styled from "styled-components";


function FileUpload(props) {
    const {onChange } = props;

    return (
        <form>
            <div>
                <label>
                    <input type="file" onChange={onChange}/>
                </label>
            
            </div>
        </form>
    )

}

export default FileUpload;