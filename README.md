# Exchange Rates Application

This project is a simple React application that displays exchange rates. It allows users to search for specific currencies and view detailed information about them.

## Features

-   Fetches live exchange rates from the [CurrencyLayer API](http://currencylayer.com/).
-   Displays a list of exchange rates.
-   Allows searching for specific currencies.
-   Displays detailed information about selected currencies.
-   Smooth scrolling to top feature.

## Technologies Used

-   React
-   TypeScript
-   React Router
-   Fetch API

## Installation

1. Clone the repository:

    ```bash
    git clone https://github.com/your-username/exchange-rates-app.git
    cd exchange-rates-app
    ```

2. Install dependencies:

    ```bash
    npm install
    ```

3. Create a `.env` file in the root directory and add your CurrencyLayer API access key:

    ```env
    REACT_APP_CURRENCY_LAYER_ACCESS_KEY=your_access_key_here
    ```

4. Start the development server:

    ```bash
    npm start
    ```

    The application will be available at `http://localhost:3000`.

## Usage

-   On the homepage, you will see a list of exchange rates.
-   Use the search bar to filter the exchange rates by currency name.
-   Click on any currency to view detailed information about it.
-   Use the arrow button to smoothly scroll back to the top of the page.

## Components

### `ExchangeRatesData`

This is the main component that fetches exchange rates and manages the state for the list and selected item.

### `Detail`

This component displays detailed information about a selected currency.

### `List`

This component displays the list of exchange rates and handles item selection.

### `ScrollTopArrow`

This component provides a button to smoothly scroll back to the top of the page.

## API

### `Api`

This module provides a function to fetch live exchange rates from the CurrencyLayer API.

## Contributing

1. Fork the repository.
2. Create a new branch (`git checkout -b feature/your-feature`).
3. Commit your changes (`git commit -am 'Add some feature'`).
4. Push to the branch (`git push origin feature/your-feature`).
5. Create a new Pull Request.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgements

-   [CurrencyLayer](https://currencylayer.com/) for providing the exchange rates API.
-   [React](https://reactjs.org/) and its community for an amazing framework and ecosystem.
