# Cafe Menu Project

A full-stack cafe menu application built with Node.js backend and TestCafe testing framework.

## Project Structure

```
cafe-menu-project/
├── backend/
│   └── server.js           # Node.js Express server
├── public/
│   ├── menu.html           # Menu HTML page
│   └── styles.css          # CSS styling
├── tests/
│   ├── menu.test.js        # UI tests for menu
│   └── api.test.js         # API endpoint tests
├── package.json            # Project dependencies
├── .gitignore              # Git ignore rules
└── README.md               # This file
```

## Features

- **Frontend**: Responsive café menu with modern styling
- **Backend**: Node.js Express server with REST API
- **Testing**: Comprehensive TestCafe test suite
- **API Endpoint**: `/api/menu` returns menu data in JSON format
- **Health Check**: `/api/health` endpoint to verify server status

## Installation

1. Navigate to the project directory:
   ```bash
   cd cafe-menu-project
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

## Running the Application

Start the Node.js server:
```bash
npm start
```

The application will be available at `http://localhost:3000`

### Available Endpoints

- **Menu Page**: `http://localhost:3000/`
- **Menu API**: `http://localhost:3000/api/menu`
- **Health Check**: `http://localhost:3000/api/health`

## Running Tests

### Chrome Browser Tests
```bash
npm test
```

### Firefox Browser Tests
```bash
npm run test:firefox
```

### Headless Chrome Tests
```bash
npm run test:headless
```

## Test Coverage

The project includes comprehensive tests covering:
- Page loading and rendering
- Menu sections visibility
- Menu items display
- Price formatting
- Item descriptions
- Opening hours information
- API endpoints functionality

## Menu Items

### Sandwiches and Wraps
- Ham and Cheese - £2.95
- Hummus and Feta - £3.95
- Egg classic - £1.95
- Chicken wrap - £1.95

### Soups
- Carrot and coriander - £2.50
- Lentil - £2.50
- Tomato - £2.50

## Dependencies

### Production
- **express**: Web framework for Node.js
- **cors**: Cross-Origin Resource Sharing middleware
- **body-parser**: Request body parsing middleware

### Development
- **testcafe**: End-to-end testing framework
- **nodemon**: Auto-restart server on file changes

## Configuration Files

### .gitignore
Ignores common unnecessary files:
- node_modules/
- npm-debug.log
- .env files
- IDE configuration
- Build artifacts
- TestCafe artifacts

### package.json
Contains all project metadata, scripts, and dependencies.

## Development Tips

1. Use `npm start` to run the server
2. Use `npm test` to run all tests
3. Tests require the server to be running
4. Modify menu items in `backend/server.js` to update the API response
5. Update styling in `public/styles.css`

## License

MIT
