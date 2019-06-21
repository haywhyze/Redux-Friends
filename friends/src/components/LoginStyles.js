import styled from 'styled-components';

export const LoginStyled = styled.div`
  min-height: calc(100vh - 10rem);
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #f5f5f5;

  .login-container {
    border: 1px solid #dfdfdf;
    background-color: #fff;
    padding: 2rem;
    max-width: 15.8rem;
    text-align: center;
  }

  form {
    box-sizing: border-box;
    margin: 1rem 0;
  }

  h3 {
    margin-top: 0;
  }

  input {
    width: calc(100%);
    box-sizing: border-box;
    padding: .5rem;
    background-color: #f9f9f9;
    border: 1px solid rgba(190,190,190,.2);
    border-radius: 3px;
    margin-bottom: 0.35rem;
  }

  button {
    width: 100%;
    padding: 0.5rem;
    border: none;
    font-weight: bold;
    border-radius: 4px;
    color: #fff;
    background: rgb(56, 151, 240);
    cursor: pointer;
    margin-top: .7rem;
    font-size: .9rem;
  }


  button:disabled {
    background-color: rgba(56, 151, 240, .3);
  }

  input, button:focus {
    outline: none;
  }
`
