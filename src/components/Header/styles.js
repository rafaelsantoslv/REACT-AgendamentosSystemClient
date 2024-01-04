import styled from 'styled-components';


export const SectionNav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  background-color: #333;
  color: white;

  div {
    display: flex;
    align-items: center;

    a {
      text-decoration: none;
      color: white;
      font-weight: bold;
      font-size: 1.2rem;
    }

    img {
        height: 100%;
        width: 100%;
        border-radius: 5px;
    }
  }

  ul {
    list-style: none;
    display: flex;
    margin: 0;
    padding: 0;

    li {
      margin-right: 20px;

      a {
        text-decoration: none;
        color: white;
        font-weight: bold;
        font-size: 1rem;
      }
    }
  }

  button {
    padding: 10px 20px;
    background-color: #4caf50;
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    font-size: 1rem;
    transition: background-color 0.3s ease;

    &:hover {
      background-color: #45a049;
    }
    
  }
`;
