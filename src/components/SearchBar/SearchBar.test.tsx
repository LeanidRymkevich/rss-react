// import { render, screen, fireEvent } from '@testing-library/react';
// import '@testing-library/jest-dom';
// import { BrowserRouter, MemoryRouter } from 'react-router-dom';
// import SearchBar from './SearchBar';
// import { INPUT_TEST_ID, SEARCH_BAR_TEST_ID } from 'src/__mocks__/SearchBar';
// import { store } from 'src/redux_store/store';
// import { Provider } from 'react-redux';
// import App from 'src/App';

// describe('SearchBar test', (): void => {
//   beforeEach((): void => {
//     render(
//       <BrowserRouter>
//         <Provider store={store}>
//           <App />
//         </Provider>
//       </BrowserRouter>
//     );
//   });

//   test('SearchBar in the document', (): void => {
//     expect(screen.getByTestId(SEARCH_BAR_TEST_ID)).toBeInTheDocument();
//   });

//   test('typed input value displayed in input', async () => {
//     const input: HTMLInputElement = screen.getByTestId(INPUT_TEST_ID);

//     fireEvent.change(input, { target: { value: '1' } });
//     expect(input.value).toBe('1');
//   });
// });
