import { render, screen } from '@testing-library/react';
import App from './App';
import React from 'react';
import { shallow } from 'enzyme';


test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});

describe('App renders without crashing', () => {
    const app = shallow(<App />);

    it('App renders', () => {
        expect(app).toBeDefined();
    });

    it('App-header renders without errors', () => {
        expect(app.find('App-header')).toBeDefined();
    });

    it('App-body renders without errors', () => {
        expect(app.find('App-body')).toBeDefined();
    });

    it('App-footer renders without errors', () => {
        expect(app.find('App-footer')).toBeDefined();
    });
});