import axios from "axios";
import React, { useState } from "react";

export default function Bot() {
  const [question, setquestion] = useState("");

  async function api() {
    console.log("loading...");
    const responce = await axios({
      url: " https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash-latest:generateContent?key=AIzaSyCaa7nX0L8gWFBOSS75JvJupDDTznlV55Y",
      method: "post",
      data: {
        contents: [{ parts: [{ text: question }] }],
      },
    });
    console.log(
      responce["data"]["candidates"][0]["content"]["parts"]["0"]["text"]
    );
  }
  return (
    <div>
      <h1>hekki</h1>
      <button onClick={api} className="btn btn-primary">
        call
      </button>
    </div>
  );
}