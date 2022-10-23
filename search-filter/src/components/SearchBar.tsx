// style
import styled from "styled-components";
import DeleteIcon from "@mui/icons-material/Delete";

export const SearchBar = ({ query, onQuery, initializationQuery }: any) => {
  return (
    <Label>
      <Input
        type="text"
        placeholder="Search..."
        value={query}
        onChange={onQuery}
      />
      <button onClick={initializationQuery}>
        <DeleteIcon />
      </button>
    </Label>
  );
};
const Input = styled.input`
  width: 100%;
  height: 40px;
  border: none;
  padding: 0 15px;
  border: 2px solid black;
  border-radius: 15px;
  color: white;
  ::placeholder {
    color: black;
  }
`;

const Label = styled.label`
  position: relative;
  width: 30%;
  margin: 20px 0;

  button {
    position: absolute;
    background: none;
    color: inherit;
    border: none;
    padding: 0;
    font: inherit;
    cursor: pointer;
    outline: inherit;
    top: 7px;
    right: 0px;
    :hover {
      border: 1px solid black;
      border-radius: 10px;
    }
  }
`;
