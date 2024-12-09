import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import '@testing-library/jest-dom';
import Homepage from '../../client/src/components/Homepage';
import NavBar from '../../client/src/components/NavBar';

jest.mock('../../client/src/assets/menPhoto.jpg', () => 'menPhoto.jpg');
jest.mock('../../client/src/assets/homepageGIF.mp4', () => 'homepageGIF.mp4');
jest.mock('../../client/src/assets/search-icon.png', () => 'search-icon.png');
jest.mock('../../client/src/assets/my-cart.png', () => 'my-cart.png');
jest.mock('../../client/src/assets/account-icon.png', () => 'account-icon.png');
jest.mock('../../client/src/assets/logo.png', () => 'logo.png');

describe('MainContainer', () => {
  test('renders NavBar correctly', () => {
    render(
      <BrowserRouter>
        <NavBar />
      </BrowserRouter>
    );

    expect(screen.getByText('Men')).toBeInTheDocument();
    expect(screen.getByText('Women')).toBeInTheDocument();
    expect(screen.getByText('Electronics')).toBeInTheDocument();
    expect(screen.getByText('Jewleries')).toBeInTheDocument();
    expect(screen.getByText('Clothing Store')).toBeInTheDocument();
    expect(screen.getByText('Sign In')).toBeInTheDocument();
    expect(screen.getByText('My Cart')).toBeInTheDocument();

    const imgs = screen.getAllByRole('img');
    expect(imgs[0]).toBeInTheDocument();
    expect(imgs[1]).toBeInTheDocument();
    expect(imgs[2]).toBeInTheDocument();
    expect(imgs[3]).toBeInTheDocument();

    const links = screen.getAllByRole('link');
    expect(links[0]).toHaveAttribute('href', 'http://localhost:8081/men');
    expect(links[1]).toHaveAttribute('href', 'http://localhost:8081/women');
    expect(links[2]).toHaveAttribute('href', 'http://localhost:8081/electronics');
    expect(links[3]).toHaveAttribute('href', 'http://localhost:8081/jewleries');
    expect(links[4]).toHaveAttribute('href', 'http://localhost:8081');
    expect(links[5]).toHaveAttribute('href', 'http://localhost:8081/account');
    expect(links[6]).toHaveAttribute('href', 'http://localhost:8081/cart');

    // const initialStyle = window.getComputedStyle(links[0]).getPropertyValue('background-color');
    // fireEvent.mouseEnter(links[0]);
    // const hoverStyle = window.getComputedStyle(links[0]).getPropertyValue('background-color');
    // expect(hoverStyle).not.toBe(initialStyle);
  });

  test('renders Homepage correctly', () => {
    render(
      <BrowserRouter>
        <Homepage />
      </BrowserRouter>
    );

    // Check if the title of the Men section is rendered
    expect(screen.getByText('Men Clothes')).toBeInTheDocument();
    expect(screen.getByText('Women Clothes')).toBeInTheDocument();

    // Check if the buttons are rendered
    const buttons = screen.getAllByText('Shop Now!');
    expect(buttons[0]).toBeInTheDocument();
    expect(buttons[1]).toBeInTheDocument();

    // Check if the images and video are rendered
    expect(screen.getByRole('video')).toBeInTheDocument();
    expect(screen.getByRole('img', { name: 'menPhoto' })).toBeInTheDocument();
    expect(screen.getByRole('img', { name: 'womenPhoto' })).toBeInTheDocument();
  });
})