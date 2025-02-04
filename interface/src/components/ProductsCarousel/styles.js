import styled from 'styled-components';

export const Container = styled.div`
  padding-left: 40px;
  padding-bottom: 40px;
  overflow-x: hidden;

  .sliders-carousel {
    display: flex;
    align-items: center;
    justify-content: center;
    padding-right: 40px;

    @media (max-width: 768px) {
      padding: 10px;
    }

    @media (max-width: 480px) {
      padding: 8px;
    }
  }

  .react-multi-carousel-list {
    overflow: visible;
  }

  .react-multiple-carousel__arrow--left {
    left: 20px;
    top: 6px;
    background-color: #9758a6;

    @media (max-width: 768px) {
      left: 30px;
      top: 40px;
    }

    @media (max-width: 480px) {
      left: -35px;
      top: 15px;
    }

    .react-multiple-carousel__arrow--right {
      right: 50px;
      top: 6px;
      background-color: #9758a6;

      @media (max-width: 768px) {
        right: 30px;
        top: 40px;
      }

      @media (max-width: 480px) {
        right: -35px;
        top: 15px;
      }
    }
  }
`;

export const Title = styled.h2`
  font-size: 32px;
  font-weight: 800;
  color: #61a120;
  padding-bottom: 12px;
  position: relative;
  text-align: center;
  margin: 70px 0;

  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
    width: 56px;
    height: 4px;
    background-color: #61a120;
  }

  @media (max-width: 768px) {
    font-size: 28px;
    margin-bottom: 30px;
  }

  @media (max-width: 480px) {
    font-size: 24px;
    margin: 40px 0;

    &::after {
      width: 40px;
      height: 3px;
    }
  }
`;
