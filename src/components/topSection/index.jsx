import React from 'react';
import styled from 'styled-components';

const TopSectionContainer = styled.div`
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-top: 13%;
    z-index: 99;
`;

const Logo = styled.h1`
   margin: 0;
   color:#fff;
   font-weight: 800;
   font-size: 80px; 
`;

const Slogan = styled.h4`
    margin: 0;
    color: #fff;
    font-weight: 700;
    font-size: 30px;
    margin-top: 10px;
`;

const Paragraph = styled.div`
    margin: 0;
    margin-top: 3em;
    color: #fff;
    font-size: 14px;
    line-weight: 500;
    max-width: 30%;
    text-align: center;
`;

const DonateButton = styled.div`
    outline: none;
    border: none;
    background-color: #27b927;
    color: #fff;
    font-size: 16px:
    font-weight: 700;
    border-radius: 8px;
    padding: 8px 2em;
    margin-top: 3em;
    cursor: pointer;
    border: 2px solid transparent;
    transition: all 350ms ease-in-out;

    &hover {
        background-color: transparent;
        border: 2px solid #27b927;
    }
`;

export function TopSection() {
    return (
        <TopSectionContainer>
            <Logo>Save our Planet</Logo>
            <Slogan>Make changes to live sustainably and take care of our home </Slogan>
            <Paragraph>
                Restore, protect, and enhance the environment, to 
                ensure public health, environmental quality and 
                economic vitality.
            </Paragraph>
            <DonateButton>Donate Now</DonateButton>
        </TopSectionContainer>
    );
}


