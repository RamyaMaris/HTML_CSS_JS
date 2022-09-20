body{
  background-color: #c6bacc;
}
div {
  box-sizing: border-box;
  width: 100%;
  border: 100px solid black;
  float: left;
  align-content: center;
  align-items: center;
  border-radius: 10px;
}
form {
  margin: 5 auto;
  width: 600px;
  padding : 5px;
}

label {
  color: #121212;
  font-weight: bold;
  display: block;
  width: 150px;
  float: left;
  margin-top: 5px;
}
label:after {
  content: ": ";
}
input {
  padding: 5px;
  width: 100%;

}
select {
  appearance: none;
  outline: 0;
  width: 100%;
  height: 5%;
  color: black;
  cursor: pointer;
  border: 1px solid black;
  border-radius: 3px;

}
textarea {
  width: 100%;
  height: 150px;
  padding: 12px 20px;
  box-sizing: border-box;
  border: 1px solid #ccc;
  border-radius: 4px;
  background-color: #f8f8f8;
  font-size: 16px;
  resize: none;

}
