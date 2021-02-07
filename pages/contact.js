import React, { useState } from "react";
import fire from "../config/fire-base";
import {
  FormControl,
  FormLabel,
  FormControlLabel,
  RadioGroup,
  Radio,
} from "@material-ui/core";
import PageContent from "../components/styles/PageContent";
import ContentSection from "../components/styles/ContentSection";

const Contact = () => {
  const [name, setName] = useState("");
  const [answer, setAnswer] = useState("");
  const [notification, setNotification] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();

    fire.firestore().collection("guests").add({
      name: name,
      answer: answer,
    });

    setName("");
    setAnswer("");

    setNotification("Blogpost created");

    setTimeout(() => {
      setNotification("");
    }, 2000);
  };
  return (
    <PageContent>
      <h2>Please respond to the event</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label className="label">Name</label>
          <br />
          <input
            type="text"
            className="input"
            value={name}
            onChange={({ target }) => setName(target.value)}
          />
        </div>
        <div>
          <label className="label">Answer</label>
          <br />
          <textarea
            value={answer}
            className="input"
            onChange={({ target }) => setAnswer(target.value)}
          />
        </div>
        <button className="save" type="submit">
          Save
        </button>
      </form>
    </PageContent>
  );
};
export default Contact;
