import React from 'react';
import { useParams } from "react-router-dom";
import { Route, Switch, Redirect, useLocation } from "react-router-dom";
import { Container, Row, Col } from 'react-bootstrap';

import './CoursePage.style.css'
import NavTabs from '../navTabs/NavTabs.component';

function CoursePage(props) {
    const { courseId } = useParams();
    const currentPath = useLocation().pathname;
    return (
        <Row>
            <Row>
                <Col id="courseTitle"> <h1> {courseId}</h1> </Col></Row>
                <NavTabs/>
        </Row >
    );
}

export default CoursePage;