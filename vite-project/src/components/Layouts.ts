import styled from 'styled-components';

const Button = styled.button`
  background-color: black;
  border: none;
  border-radius: 5px;
  color: white;
  display: block;
  font-size: 1.25rem;
  padding: 10px;
  margin: 25px 0;
  width: 100%;
`;

const Header = styled.h1``;

const Title = styled(Header);

const Subtitle = styled(Header);

const Container = styled.div`
  margin: 0 auto;
  max-width: 960px;
  padding: 25px;
`;

const FormGroup = styled.div`
  margin: 5px 0;
  width: 100%;

  label {
    display: none;
  }

  input {
    display: inherit;
    border: 1px solid lightgray;
    border-radius: 5px;
    font-size: 1.2rem;
    padding: 10px;
    width: inherit;
  }
`;

const Row = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
  @media (min-width: 720px) {
    flex-direction: row;
  }
`;

const Col = styled.div`
  flex: 1;
`;

export { Button, Header, Title, Subtitle, Container, FormGroup, Row, Col };
