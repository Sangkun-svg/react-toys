// style
import styled from "styled-components";
import DeleteIcon from "@mui/icons-material/Delete";

export const SearchBar = ({ query, onQuery, deleteQuery }: any) => {
  return (
    <Label>
      <input
        type="text"
        placeholder="Search..."
        value={query}
        onChange={onQuery}
      />
      <button onClick={deleteQuery}>
        <DeleteIcon />
      </button>
    </Label>
  );
};
const Label = styled.label`
  position: relative;
  width: 30%;
  margin: 20px 0;
  input {
    width: 100%;
    height: 40px;
    border: none;
    padding: 0 15px;
    border: 2px solid blue;
    border-radius: 15px;
  }

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
