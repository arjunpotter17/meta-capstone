import { render, fireEvent, screen } from "@testing-library/react";
import Reserve from "./components/Reserve";
import App from "./App";

test('Renders the BookingForm heading', () => {
    render(<Reserve />);
    const headingElement = screen.getByText("Table Reservation Form");
    expect(headingElement).toBeInTheDocument();
})

test('Check if the functions work', () => {
  render(<App/>);
  expect(initialTime()).toBe(Array);
})

test('Check if the functions work', () => {
  render(<App/>);
  expect(updateTimes({selectedVal:'17:00',0: '18:00', 1:'19:00',2:'20:00'},'20:00')).toBe({selectedVal:'17:00',0: '18:00', 1:'19:00',2:'20:00', 3:'20:00'});
})
