import React from 'react';
import styled from "styled-components";
import Section from './Section';
import img from "../images/image/model-s.jpg";
import img1 from "../images/image/model-y.jpg";
import img2 from "../images/image/model-3.jpg";
import img3 from "../images/image/model-x.jpg";
import img4 from "../images/image/solar-panel.jpg";
import img5 from "../images/image/solar-roof.jpg";
import img6 from "../images/image/accessories.jpg";

const Home = () => {
    return (
        <Container>
            <Section
                title="Model-S"
                description="Order Online for Touchless Delivery"
                backgroundImg={img}
                leftBtnText="Custom order"
                rightBtnText="Existing inventory"
            />
            <Section
                title="Model-Y"
                description="Order Online for Touchless Delivery"
                backgroundImg={img1}
                leftBtnText="Custom order"
                rightBtnText="Existing inventory"
            />
            <Section
                title="Model 3"
                description="Order Online for Touchless Delivery"
                backgroundImg={img2}
                leftBtnText="Custom order"
                rightBtnText="Existing inventory"
            />
            <Section
                title="Model X"
                description="Order Online for Touchless Delivery"
                backgroundImg={img3}
                leftBtnText="Custom order"
                rightBtnText="Existing inventory"
            />
            <Section
                title="Lowest Cost Solar Panels in America"
                description="Money-back guarantee"
                backgroundImg={img4}
                leftBtnText="Order now"
                rightBtnText="Learn more"
            />
            <Section
                title="Solar for New Roofs"
                description="Solar Roof  Costs Less Than a New Roof Plus Solar Panels"
                backgroundImg={img5}
                leftBtnText="Order now"
                rightBtnText="Learn more"
            />
            <Section
                title="Accessories"
                description=""
                backgroundImg={img6}
                leftBtnText="Shop now"
            />
        </Container>
    );
};

export default Home;

// css
const Container = styled.div`
    height: 100vh;
    z-index: 10;
`