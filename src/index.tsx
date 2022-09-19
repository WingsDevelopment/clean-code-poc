// scroll bar
import 'simplebar/src/simplebar.css';

// highlight
import './theme-code/utils/highlight';

// editor
import 'react-quill/dist/quill.snow.css';

// lazy image
import 'react-lazy-load-image-component/src/effects/blur.css';
import 'react-lazy-load-image-component/src/effects/opacity.css';
import 'react-lazy-load-image-component/src/effects/black-and-white.css';

import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
// contexts
import { SettingsProvider } from './theme-code/contexts/SettingsContext';
import { CollapseDrawerProvider } from './theme-code/contexts/CollapseDrawerContext';

import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
//
import App from './App';
import { ReactQueryDevtools } from 'react-query/devtools';
import { QueryClient, QueryClientProvider } from 'react-query';
const queryClient = new QueryClient();
// ----------------------------------------------------------------------

ReactDOM.render(
  <HelmetProvider>
    <QueryClientProvider client={queryClient}>
      <LocalizationProvider dateAdapter={AdapterDateFns}>
        <SettingsProvider>
          <CollapseDrawerProvider>
            <BrowserRouter>
              <App />
            </BrowserRouter>
          </CollapseDrawerProvider>
        </SettingsProvider>
      </LocalizationProvider>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  </HelmetProvider>,
  document.getElementById('root')
);
