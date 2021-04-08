import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import image1 from "../assets/welcomepage.png";
import image2 from "../assets/weatherApp.png";
import image3 from "../assets/AceOfPentacles.png";
import image4 from "../assets/teamProfileGenerator.png";
import image5 from "../assets/fitness.png";
import image6 from "../assets/employeeTracker.png";
import { CardDeck } from "react-bootstrap";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container"

const Cards = () => {
  return (
    <CardDeck>
      <Container>
        <Row>
          <Col>
            <Card style={{ width: "18rem" }}>
              <Card.Img variant="top" src={image1} />
              <Card.Body>
                <Card.Title>Bechdel Billboard</Card.Title>
                <Card.Text>
                  The Bechdel Billboard is an app that allows the user to find a
                  list of movies that pass the bechdel test and allow for our
                  users to blog and comment on the stories that inspire them.
                </Card.Text>
                <Button
                  href="https://bechdelbillboard.herokuapp.com/"
                  variant="primary"
                >
                  App
                </Button>
                <Button
                  href="https://github.com/Franciscorosado09/BechdelBillboard"
                  variant="primary"
                >
                  Github
                </Button>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card style={{ width: "18rem" }}>
              <Card.Img variant="top" src={image3} />
              <Card.Body>
                <Card.Title>Ace of Pentacles</Card.Title>
                <Card.Text>
                This is a tarot card reading application where I worked on the HTML, CSS, Javascript,
              and Design.
                </Card.Text>
                <Button
                  href="https://franciscorosado09.github.io/AceOfPentacles/"
                  variant="primary"
                >
                  App
                </Button>
                <Button
                  href="https://github.com/Franciscorosado09/AceOfPentacles"
                  variant="primary"
                >
                  Github
                </Button>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card style={{ width: "18rem" }}>
              <Card.Img variant="top" src={image2} />
              <Card.Body>
                <Card.Title>Weather Dashboard</Card.Title>
                <Card.Text>
                Use the OpenWeather API to retrieve weather data to pull city forecasts. Worked with
              APIs, JQuery, Javascript, HTML, CSS.
                </Card.Text>
                <Button
                  href="https://franciscorosado09.github.io/WeatherDashboardHW6/"
                  variant="primary"
                >
                  App
                </Button>
                <Button
                  href="https://github.com/Franciscorosado09/WeatherDashboardHW6"
                  variant="primary"
                >
                  Github
                </Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>

        <Row>
        <Col>
            <Card style={{ width: "18rem" }}>
              <Card.Img variant="top" src={image4} />
              <Card.Body>
                <Card.Title>Team Profile Generator</Card.Title>
                <Card.Text>
                Build a software engineering team generator command line application with node. 
              The application will prompt the user about the team members. This assignment must also pass all unit tests.
                </Card.Text>
                <Button
                  href="https://drive.google.com/file/d/1oW2jAIC8u8guvOvCohIGhOZ6g3SGJx2r/view"
                  variant="primary"
                >
                  Demo Video
                </Button>
                <Button
                  href="https://github.com/Franciscorosado09/teamProfileGenerator"
                  variant="primary"
                >
                  Github
                </Button>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card style={{ width: "18rem" }}>
              <Card.Img variant="top" src={image5} />
              <Card.Body>
                <Card.Title>Workout Tracker</Card.Title>
                <Card.Text>
                For this assignment,I created a workout tracker. I was provided with the front end code in the Develop folder. This assignment I created a Mongo database with a Mongoose schema and handle routes with Express.
                </Card.Text>
                <Button
                  href="https://workout-tracker-fer.herokuapp.com/?id=6054f0d3dc12f20015245ada"
                  variant="primary"
                >
                  App
                </Button>
                <Button
                  href="https://github.com/Franciscorosado09/WorkoutTracker"
                  variant="primary"
                >
                  Github
                </Button>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card style={{ width: "18rem" }}>
              <Card.Img variant="top" src={image6} />
              <Card.Body>
                <Card.Title>Employee Tracker</Card.Title>
                <Card.Text>
                Developers are often tasked with creating interfaces that make 
              it easy for non-developers to view and interact with information stored in databases. 
              Often these interfaces are known as Content Management Systems. In this homework assignment, 
              my challenge was to architect and build a solution for managing a company's employees using node, inquirer, and MySQL
                </Card.Text>
                <Button
                  href="https://drive.google.com/file/d/1cLcomfjCdj221YQreu3k5kI8AXUHXHhc/view?usp=sharing"
                  variant="primary"
                >
                  Demo Video
                </Button>
                <Button
                  href="https://github.com/Franciscorosado09/employeeTracker"
                  variant="primary"
                >
                  Github
                </Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </CardDeck>
  );
};

export default Cards;
