import styled from "styled-components";
import imagemHome2 from "../../assets/imagemHome2.jpg"


export const MainHome = styled.main `
    display: flex;
    background-color: #666;
    /* background-image: url(${imagemHome2}); */
    /* background-repeat: repeat-x; */
    height: 600px;
    width: 100%;
   

    section {
        display: flex;
        align-content: space-between;
        align-items: center;
        padding: 0 20px;
        
        p {
            height: 100%;
            width: 50%;
        }

        img {
            height: 100%;
            width: 50%;
        }
    }

`