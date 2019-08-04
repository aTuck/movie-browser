import styled from "styled-components"

export const Test = styled.div`
  transition: 0.5s;
  width: 300px;
  height: 200px;
  /* example for move item */
  transform: translateX(
    ${({ state }) => (state === "entering" || state === "entered" ? 400 : 0)}px
  );
  /* change color*/
  background: ${({ state }) => {
    switch (state) {
      case "entering":
        return "red"
      case "entered":
        return "blue"
      case "exiting":
        return "green"
      case "exited":
        return "yellow"
      default:
        return "red" 
    }
  }};
`