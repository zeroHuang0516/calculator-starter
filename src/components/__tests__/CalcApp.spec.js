import React from 'react';
import { mount } from 'enzyme';

import CalcApp from '../CalcApp';
import CalcButton from '../CalcButton';

it('render button correctly', () => {
  const app = mount(<CalcApp />);

  const rows = app.find('.calc-row');
  const row0 = rows.at(0);
  expect(row0.find(CalcButton).at(0).text()).toBe('AC');
  expect(row0.find(CalcButton).at(1).text()).toBe('+/-');
  expect(row0.find(CalcButton).at(2).text()).toBe('%');
  expect(row0.find(CalcButton).at(3).text()).toBe('÷');

  const row1 = rows.at(1);
  expect(row1.find(CalcButton).at(0).text()).toBe('7');
  expect(row1.find(CalcButton).at(1).text()).toBe('8');
  expect(row1.find(CalcButton).at(2).text()).toBe('9');
  expect(row1.find(CalcButton).at(3).text()).toBe('x');

  const row2 = rows.at(2);
  expect(row2.find(CalcButton).at(0).text()).toBe('4');
  expect(row2.find(CalcButton).at(1).text()).toBe('5');
  expect(row2.find(CalcButton).at(2).text()).toBe('6');
  expect(row2.find(CalcButton).at(3).text()).toBe('-');

  const row3 = rows.at(3);
  expect(row3.find(CalcButton).at(0).text()).toBe('1');
  expect(row3.find(CalcButton).at(1).text()).toBe('2');
  expect(row3.find(CalcButton).at(2).text()).toBe('3');
  expect(row3.find(CalcButton).at(3).text()).toBe('+');

  const row4 = rows.at(4);
  expect(row4.find(CalcButton).at(0).text()).toBe('0');
  expect(row4.find(CalcButton).at(1).text()).toBe('.');
  expect(row4.find(CalcButton).at(2).text()).toBe('=');
});


it('7 8 9 -> 789', () => {
  const app = mount(<CalcApp />);

  const rows = app.find('.calc-row');

  const row1 = rows.at(1);
  const btn7 = row1.find(CalcButton).at(0);
  const btn8 = row1.find(CalcButton).at(1);
  const btn9 = row1.find(CalcButton).at(2);

  btn7.simulate('click');
  btn8.simulate('click');
  btn9.simulate('click');

  expect(app.find('.calc-display').text()).toEqual('789');
});

//substraction
it('7 8 9 - 8 = -> 781', () => {
  const app = mount(<CalcApp />);

  const rows = app.find('.calc-row');

  const row1 = rows.at(1);
  const btn7 = row1.find(CalcButton).at(0);
  const btn8 = row1.find(CalcButton).at(1);
  const btn9 = row1.find(CalcButton).at(2);

  btn7.simulate('click');
  btn8.simulate('click');
  btn9.simulate('click');

  const row2 = rows.at(2);
  const btnMinus = row2.find(CalcButton).at(3);

  btnMinus.simulate('click');

  btn8.simulate('click');

  const row4 = rows.at(4);
  const btnEqual = row4.find(CalcButton).at(2);

  btnEqual.simulate('click');

  expect(app.find('.calc-display').text()).toEqual('781');
});

//addition
it('7 8 9 + 8 = -> 797', () => {
  const app = mount(<CalcApp />);

  const rows = app.find('.calc-row');

  const row1 = rows.at(1);
  const btn7 = row1.find(CalcButton).at(0);
  const btn8 = row1.find(CalcButton).at(1);
  const btn9 = row1.find(CalcButton).at(2);

  btn7.simulate('click');
  btn8.simulate('click');
  btn9.simulate('click');

  const row3 = rows.at(3);
  const btnAdd = row3.find(CalcButton).at(3);

  btnAdd.simulate('click');

  btn8.simulate('click');

  const row4 = rows.at(4);
  const btnEqual = row4.find(CalcButton).at(2);

  btnEqual.simulate('click');

  expect(app.find('.calc-display').text()).toEqual('797');
});

//multiplication
it('7 * 8 = -> 56', () => {
  const app = mount(<CalcApp />);

  const rows = app.find('.calc-row');

  const row1 = rows.at(1);
  const btn7 = row1.find(CalcButton).at(0);
  const btn8 = row1.find(CalcButton).at(1);
  const row2 = rows.at(2);
  const btn5 = row2.find(CalcButton).at(1);
  const btn6 = row2.find(CalcButton).at(2);

  btn7.simulate('click');
  

  
  const btnMul = row1.find(CalcButton).at(3);

  btnMul.simulate('click');

  btn8.simulate('click');

  const row4 = rows.at(4);
  const btnEqual = row4.find(CalcButton).at(2);

  btnEqual.simulate('click');

  expect(app.find('.calc-display').text()).toEqual('56');
});

//division 
it('56 / 8 = -> 7', () => {
  const app = mount(<CalcApp />);

  const rows = app.find('.calc-row');

  const row1 = rows.at(1);
  const btn7 = row1.find(CalcButton).at(0);
  const btn8 = row1.find(CalcButton).at(1);
  const row2 = rows.at(2);
  const btn5 = row2.find(CalcButton).at(1);
  const btn6 = row2.find(CalcButton).at(2);

  
  btn5.simulate('click');
  btn6.simulate('click');

  const row0 = rows.at(0);
  const btnDiv = row0.find(CalcButton).at(3);

  btnDiv.simulate('click');

  btn8.simulate('click');

  const row4 = rows.at(4);
  const btnEqual = row4.find(CalcButton).at(2);

  btnEqual.simulate('click');

  expect(app.find('.calc-display').text()).toEqual('7');
});

it('7 + 8 + -> 15', () => {
  const app = mount(<CalcApp />);

  const rows = app.find('.calc-row');

  const row1 = rows.at(1);
  const btn7 = row1.find(CalcButton).at(0);
  const btn8 = row1.find(CalcButton).at(1);
  const row2 = rows.at(2);
  const btn5 = row2.find(CalcButton).at(1);
  const row3 = rows.at(3);
  const btn1 = row3.find(CalcButton).at(0);

  
  btn7.simulate('click');

  const btnAdd = row3.find(CalcButton).at(3);
  btnAdd.simulate('click');

  btn8.simulate('click');

  btnAdd.simulate('click');

  expect(app.find('.calc-display').text()).toEqual('15');
});

it('8 + - 7 + -> 1', () => {
  const app = mount(<CalcApp />);

  const rows = app.find('.calc-row');

  const row1 = rows.at(1);
  const btn7 = row1.find(CalcButton).at(0);
  const btn8 = row1.find(CalcButton).at(1);
  const row3 = rows.at(3);
  const btn1 = row3.find(CalcButton).at(0);


  const btnAdd = row3.find(CalcButton).at(3);

  btn8.simulate('click');
  btnAdd.simulate('click');
  
  const row2 = rows.at(2);
  const btnMinus = row2.find(CalcButton).at(3);

  btnMinus.simulate('click');
  btn7.simulate('click');
  btnAdd.simulate('click');

  expect(app.find('.calc-display').text()).toEqual('1');
});

it('7 8 7 8 * 9 7  -> 97', () => {
  const app = mount(<CalcApp />);

  const rows = app.find('.calc-row');

  const row1 = rows.at(1);
  const btn7 = row1.find(CalcButton).at(0);
  const btn8 = row1.find(CalcButton).at(1);
  const btn9 = row1.find(CalcButton).at(2);
  const btnMul = row1.find(CalcButton).at(3);
  

  btn7.simulate('click');
  btn8.simulate('click');
  btn7.simulate('click');
  btn8.simulate('click');
  btnMul.simulate('click');
  btn9.simulate('click');
  btn7.simulate('click');

  
  

  expect(app.find('.calc-display').text()).toEqual('97');
});

it('8 - 9 * -> -1', () => {
  const app = mount(<CalcApp />);

  const rows = app.find('.calc-row');

  const row1 = rows.at(1);
  const btn8 = row1.find(CalcButton).at(1);
  const btn9 = row1.find(CalcButton).at(2);
  const btnMul = row1.find(CalcButton).at(3);
  const row2 = rows.at(2);
  const btnMinus = row2.find(CalcButton).at(3);
  

  
  btn8.simulate('click');
  btnMinus.simulate('click');
  btn9.simulate('click');
  btnMul.simulate('click');

  expect(app.find('.calc-display').text()).toEqual('-1');
});

it('AC should clear state', () => {
  const app = mount(<CalcApp />);

  const initialState = app.state();

  const rows = app.find('.calc-row');
  const row0 = rows.at(0);
  const AC = row0.find(CalcButton).at(0);

  const row1 = rows.at(1);
  const btn7 = row1.find(CalcButton).at(0);

  btn7.simulate('click');
  AC.simulate('click');

  expect(app.state()).toEqual(initialState);
});


