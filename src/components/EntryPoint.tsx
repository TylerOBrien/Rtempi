/**
 * Global Imports
*/

import React from 'react';
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
 * Locals
*/

function EntryPointMain() {
  return (
    <UserGuard
      loading={ null }
      guest={ null }
      unidentified={ null }
      identified={ null }
    />
  );
}

function EntryPointOverlay() {
  return (
    <View>
      
    </View>
  );
}

/**
 * Exports
*/

export function EntryPoint() {
  return (
    <AuthProvider>
      <UserProvider>
        <ApiProvider>
          <FormProvider>
            <BrowserRouter>
              <EntryPointMain />
            </BrowserRouter>
            <EntryPointOverlay />
          </FormProvider>
        </ApiProvider>
      </UserProvider>
    </AuthProvider>
  );
}
