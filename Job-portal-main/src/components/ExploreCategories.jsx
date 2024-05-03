import React from "react";
import Card from "react-bootstrap/Card";
import CardGroup from "react-bootstrap/CardGroup";
import "./ExploreCategories..css";

const ExploreCategories = () => {
  return (
    <div className="banner3">
      <h2>Explore Popular Vacancies</h2>
      <CardGroup className="d-flex flex-wrap ">
        <Card className="explore-child h-24">
          <Card.Body className="explore-body">
            <Card.Title>
              <h1>Dev Ops Engineers</h1>
            </Card.Title>
            <Card.Text>50,364 Open Positions</Card.Text>
          </Card.Body>
        </Card>
        <Card className="explore-child h-24">
          <Card.Body className="explore-body">
            <Card.Title>
              <h1>Dev Ops Engineers</h1>
            </Card.Title>
            <Card.Text>50,364 Open Positions</Card.Text>
          </Card.Body>
        </Card>
        <Card className="explore-child h-24">
          <Card.Body className="explore-body">
            <Card.Title>
              <h1>ReactJS Developers</h1>
            </Card.Title>
            <Card.Text>4,339 Open Positions</Card.Text>
          </Card.Body>
        </Card>
        <Card className="explore-child h-24">
          <Card.Body className="explore-body">
            <Card.Title>
              <h1>Flutter Native</h1>
            </Card.Title>
            <Card.Text>20,079 Open Positions</Card.Text>
          </Card.Body>
        </Card>

        {/* 2nd Row */}
      </CardGroup>

      <div className="row2">
        <CardGroup className="d-flex flex-wrap ">
          <Card className="explore-child h-24">
            <Card.Body className="explore-body">
              <Card.Title>
                <h1>Maxillofacial Surgeons</h1>
              </Card.Title>
              <Card.Text>74,875 Open Positions</Card.Text>
            </Card.Body>
          </Card>
          <Card className="explore-child h-24">
            <Card.Body className="explore-body">
              <Card.Title>
                <h1>Software Developers</h1>
              </Card.Title>
              <Card.Text>43359 Open Positions</Card.Text>
            </Card.Body>
          </Card>
          <Card className="explore-child h-24">
            <Card.Body className="explore-body">
              <Card.Title>
                <h1>UI/UX Designers</h1>
              </Card.Title>
              <Card.Text>18,599 Open Positions</Card.Text>
            </Card.Body>
          </Card>
          <Card className="explore-child h-24">
            <Card.Body className="explore-body">
              <Card.Title>
                <h1>Data Scientist</h1>
              </Card.Title>
              <Card.Text>28,200 Open Positions</Card.Text>
            </Card.Body>
          </Card>

          {/* 2nd Row */}
        </CardGroup>
      </div>
      {/* 3nd Row */}

      <div className="row3">
        <CardGroup className="d-flex flex-wrap ">
          <Card className="explore-child h-24">
            <Card.Body className="explore-body">
              <Card.Title>
                <h1>Financial Manager</h1>
              </Card.Title>
              <Card.Text>61,391 Open Positions</Card.Text>
            </Card.Body>
          </Card>
          <Card className="explore-child h-24">
            <Card.Body className="explore-body">
              <Card.Title>
                <h1>Project Manager</h1>
              </Card.Title>
              <Card.Text>93,046 Open Positions</Card.Text>
            </Card.Body>
          </Card>
          <Card className="explore-child h-24">
            <Card.Body className="explore-body">
              <Card.Title>
                <h1>IT Manager</h1>
              </Card.Title>
              <Card.Text>50,963 Open Positions</Card.Text>
            </Card.Body>
          </Card>
          <Card className="explore-child h-24">
            <Card.Body className="explore-body">
              <Card.Title>
                <h1>Research Analyst</h1>
              </Card.Title>
              <Card.Text>16,627 Open Positions</Card.Text>
            </Card.Body>
          </Card>
        </CardGroup>
      </div>
    </div>
  );
};
export default ExploreCategories;
