import { Button, CircularProgress, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { useNavigate } from "react-router-dom";
import SelectFieldComp from "../components/SelectFieldComp";
import TextFieldComp from "../components/TextFieldComp";
import useAxios from "../hooks/useAxios";
import Nav from "../Nav";

const Settings = () => {
  const { response, error, loading } = useAxios({ url: "/api_category.php" });
  const navigate = useNavigate();

  if (loading) {
    return (
      <Box mt={20}>
        <CircularProgress />
      </Box>
    );
  }

  if (error) {
    return (
      <Typography variant="h6" mt={20} color="red">
        Some Went Wrong!
      </Typography>
    );
  }

  const difficultyOptions = [
    { id: "easy", name: "Easy" },
    { id: "medium", name: "Medium" },
    { id: "hard", name: "Hard" },
  ];

  const typeOptions = [
    { id: "multiple", name: "Multiple Choise" },
    { id: "boolean", name: "True/False" },
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate("/createquiz");
  };
  

  return (
    <>
    <Nav /><br/><br/><br/><br/>
    <form onSubmit={handleSubmit}>
      <SelectFieldComp options={response.trivia_categories} label="Category" />
      <SelectFieldComp options={difficultyOptions} label="Difficulty" />
      <SelectFieldComp options={typeOptions} label="Type" />
      <TextFieldComp />
      <Box mt={3} width="100%">
        <Button fullWidth variant="contained" type="submit">
          Get Started
        </Button>
      </Box>
    </form>
    </>
  );
};

export default Settings;