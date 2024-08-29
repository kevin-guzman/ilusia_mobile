import 'reflect-metadata';

import { describe, expect, it } from '@jest/globals';
import { act, fireEvent, render } from '@testing-library/react-native';

import { Login } from '@presentation/views/Login';

import { NavigationWrapper } from '../../../__utils__/NavigationWrapper';

describe('Login View', () => {
  it('Should fail if email and password was not filled', async () => {
    const { getByTestId, getByText } = render(
      <NavigationWrapper>
        <Login />
      </NavigationWrapper>,
    );
    const submitButton = getByTestId('login-submit-button');

    await act(async () => {
      await fireEvent.press(submitButton);
    });

    await act(async () => {
      const emailErrorText = await getByText('El email es requerido');
      expect(emailErrorText).toBeDefined();
      const passErrorText = await getByText('La contraseña es requerida');
      expect(passErrorText).toBeDefined();
    });
  });

  it('Should fail if email is not valid', async () => {
    const { getByPlaceholderText, getByTestId, getByText, debug } = render(
      <NavigationWrapper>
        <Login />
      </NavigationWrapper>,
    );
    const emailInput = getByPlaceholderText('Correo electrónico*');
    const submitButton = getByTestId('login-submit-button');

    await act(async () => {
      await fireEvent.changeText(emailInput, 'tes@-');
      fireEvent.press(submitButton);
    });

    await act(async () => {
      const errorText = getByText('Email inválido');
      expect(errorText).toBeDefined();
    });
  });
});
