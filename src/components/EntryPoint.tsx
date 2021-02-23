/**
 * Global Imports
*/

import React, { FunctionComponent } from 'react';
import { BrowserRouter } from 'react-router-dom';

/**
 * Local Imports
*/

import { View } from '~/components/Base';
import { UserGuard } from '~/components/Guard';
import {
  ApiProvider,
  AuthProvider,
  FormProvider,
  UserProvider } from '~/providers';

/**
 * Types/Interfaces
*/

export interface EntryPointProps {
  LoadingRouter: FunctionComponent;
  GuestRouter: FunctionComponent;
  UnidentifiedRouter: FunctionComponent;
  IdentifiedRouter: FunctionComponent;
}

/**
 * Locals
*/

function EntryPointOverlay() {
  return (
    <View>
      
    </View>
  );
}

/**
 * Exports
*/

export function EntryPoint(props:EntryPointProps) {
  return (
    <AuthProvider>
      <UserProvider>
        <ApiProvider>
          <FormProvider>
            <BrowserRouter>
              <UserGuard
                loading={ props.LoadingRouter }
                guest={ props.GuestRouter }
                unidentified={ props.UnidentifiedRouter }
                identified={ props.IdentifiedRouter }
              />
            </BrowserRouter>
            <EntryPointOverlay />
          </FormProvider>
        </ApiProvider>
      </UserProvider>
    </AuthProvider>
  );
}
