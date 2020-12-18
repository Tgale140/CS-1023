import "./App.css";

import React, { useState } from "react";
import { Container, Button, TextField } from "@material-ui/core";

import Logo from "./assets/logo.jpg";

function App() {
  const [name, setName] = useState("");
  const [destination, SetDestination] = useState("");
  const [dateOfTravel, setDateOfTravel] = useState("");
  const [returnDate, setReturnDate] = useState("");

  return (
    <div
      className="App"
      style={{
        height: "100vh",
        width: "100vw",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <div
        style={{
          backgroundColor: "#fff",
          width: "100%",
          padding: "10px 0",
          boxShadow: "0 0 10px rgba(0,0,0, .2)",
        }}
      >
        <Container>
          <div></div>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <div style={{ color: "#fff" }}>
              <img src={Logo} style={{ width: 120 }} />
            </div>
            <div style={{ color: "#fff" }}>
              <Button
                onClick={() => alert("buttob clicked")}
                style={{ marginLeft: 20 }}
              >
                Option 1
              </Button>
              <Button
                onClick={() => alert("buttob clicked")}
                style={{ marginLeft: 20 }}
              >
                Option 2
              </Button>
              <Button
                onClick={() => alert("buttob clicked")}
                style={{ marginLeft: 20 }}
              >
                Option 3
              </Button>

              <Button
                variant="contained"
                style={{ marginLeft: 30 }}
                onClick={() => alert("buttob clicked")}
              >
                Login/Signup
              </Button>
            </div>
          </div>
        </Container>
      </div>

      <div
        style={{
          backgroundColor: "#0da547",
          flexGrow: 1,
          display: "flex",
          justifyContent: "space-around",
          alignItems: "center",
          backgroundPosition: "center",
          backgroundImage:
            "linear-gradient(rgba(0,0,0, .5), rgba(0,0,0, .5)), url(https://www.irishferries.com/globalassets/downloads/ulysses/ulysses_-ext6_hr.jpg)",
        }}
      >
        <div
          style={{
            backgroundColor: "#fff",
            borderRadius: 7,
            width: 600,
            minHeight: 200,
            padding: 20,
            textAlign: "left",
          }}
        >
          <TextField
            id="outlined-multiline-static"
            label="Name"
            placeholder="Your name"
            variant="outlined"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />

          {name && (
            <div style={{ marginTop: 20 }}>
              <div style={{ marginBottom: 15 }}>
                Where would you like to go {name} ?
              </div>
              <TextField
                id="outlined-multiline-static"
                label="Destination"
                placeholder="eg. Hollyhead"
                variant="outlined"
                value={destination}
                onChange={(e) => SetDestination(e.target.value)}
              />
            </div>
          )}

          {destination && (
            <div style={{ marginTop: 20 }}>
              <div style={{ marginBottom: 15 }}>
                {name} when do you want to travel to {destination}?
              </div>
              <TextField
                id="outlined-multiline-static"
                label="Date"
                placeholder="20/12/20 @ 09:00"
                variant="outlined"
                value={dateOfTravel}
                onChange={(e) => setDateOfTravel(e.target.value)}
              />
            </div>
          )}

          {dateOfTravel && (
            <>
              <div style={{ marginTop: 20 }}>
                <div style={{ marginBottom: 15 }}>
                  When do you want to return?
                </div>
                <TextField
                  id="outlined-multiline-static"
                  label="Return Date"
                  placeholder="25/12/20 @ 09:00"
                  variant="outlined"
                  value={returnDate}
                  onChange={(e) => setReturnDate(e.target.value)}
                />
              </div>
              <div style={{ marginTop: 20 }}>
                <Button
                  variant="contained"
                  onClick={() =>
                    alert(
                      name +
                        "" +
                        destination +
                        " " +
                        dateOfTravel +
                        " " +
                        returnDate
                    )
                  }
                >
                  Lets book this {name}
                </Button>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

/*
  {destination && (
              <div>
                {name} when do you want to travel to {destination}
              </div>
            )}*/

export default App;
