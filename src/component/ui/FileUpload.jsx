import React from "react";
import styled from "styled-components";


// const StyledFileInput = styled.input.attrs({
//     type: 'file'
//   })`
//     /* 기본 스타일 */
//     display: none;
  
//     /* 클릭 이벤트 */
//     & + label {
//       background-color: #4CAF50;
//       border-radius: 5px;
//       color: white;
//       cursor: pointer;
//       padding: 10px;
//     }
//   `;
  

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