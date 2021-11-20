import styled from "styled-components"

export const ProjectsContainer = styled.div`
  height: 650px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: #010606;

  @media screen and (max-width: 1000px) {
    height: 800px;
  }

  @media screen and (max-width: 768px) {
    height: 1500px;
  }

  @media screen and (max-width: 480px) {
    height: 1500px;
  }
`

export const ProjectsWrapper = styled.div`
  max-width: 1000px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  align-items: center;
  grid-gap: 16px;
  padding: 0 50px;

  @media screen and (max-width: 1000px) {
    grid-template-columns: 1fr 1fr;
  }

  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr;
    padding: 0 20px;
    max-width: 500px;
  }
`

export const ProjectsCard = styled.a`
  text-decoration: none;
  color: #000;
  background: #f9f9f9;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  border-radius: 10px;
  height: 300px;
  padding: 30px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0, 2);
  transition: all 0.2s ease-in-out;

  &:hover {
    transform: scale(1.02);
    transition: all 0.2s ease-in-out;
    cursor: pointer;
  }
`

export const ProjectsIcon = styled.img`
  width: 160px;
  margin-bottom: 10px;
`

export const ProjectsH1 = styled.h1`
  font-size: 2.5rem;
  color: #fff;
  margin-bottom: 64px;

  @media screen and (max-width: 480px) {
    font-size: 2rem;
  }
`

export const ProjectsH2 = styled.h2`
  font-size: 1rem;
  margin-bottom: 10px;
`

export const ProjectsP = styled.p`
  font-size: 1rem;
  text-align: center;
`
