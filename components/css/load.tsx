/* eslint-disable import/no-anonymous-default-export */
export default `
.globalLoader{
    position: fixed;
    z-index: 1000;
    background-color: #1a1a26;
    display: flex;
    left: 0,
    right: 0;
    width: 100vw;
    height: 100vh;
    justify-content: center;
    align-items: center;
}
.loader {
    position: relative;
    width: 64px;
    height: 64px;
  }
  
  .loader div {
    position: absolute;
    border: 4px solid #454ade;
    border-radius: 50%;
    -webkit-animation: loader8435 1s ease-out infinite;
            animation: loader8435 1s ease-out infinite;
  }
  
  .loader div:nth-child(2) {
    -webkit-animation-delay: -0.5s;
            animation-delay: -0.5s;
  }
  
  @-webkit-keyframes loader8435 {
    0% {
      top: 32px;
      left: 32px;
      width: 0;
      height: 0;
      opacity: 1;
    }
  
    100% {
      top: 0;
      left: 0;
      width: 64px;
      height: 64px;
      opacity: 0;
    }
  }
  
  @keyframes loader8435 {
    0% {
      top: 32px;
      left: 32px;
      width: 0;
      height: 0;
      opacity: 1;
    }
  
    100% {
      top: 0;
      left: 0;
      width: 64px;
      height: 64px;
      opacity: 0;
    }
  }
  
`;
