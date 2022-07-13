import styled from "styled-components";

export const Body = styled.div`
  align-items: center;
  color: #222;
  display: flex;
  flex-direction: column;
  font-size: calc(10px + 2vmin);
  justify-content: center;
  margin-top: 40px;
`;

export const Button = styled.button`
  background-color: #C3D9BF;
  border: none;
  border-radius: 8px;
  color: #282c34;
  cursor: pointer;
  font-size: 16px;
  margin: 0px 20px;
  padding: 12px 24px;
  text-align: center;
  text-decoration: none;
  transition: all 150ms;
  box-shadow: 0px 3px 16px 0 rgba(0,0,0,0.04);
  border: 2px solid rgba(255, 255, 255, 0.15);
  &:hover {
    background-color: #A7E49D;
  }
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: calc(100vh);
`;

export const Header = styled.header`
  align-items: center;
  color: #222;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  min-height: 70px;
`;

export const Image = styled.img`
  height: 14vmin;
  margin-bottom: 16px;
  pointer-events: none;
`;

export const Link = styled.a.attrs({
  target: "_blank",
  rel: "noopener noreferrer",
})`
  color: #313acb;
  margin-top: 8px;
  transition: all 200ms;
  text-decoration: none;
  padding: 3px;
  &:hover {
    box-shadow: inset 0 -2px 0 0 #313acb;
    background-color: rgba(0, 0, 100, 0.1);
  }
`;
