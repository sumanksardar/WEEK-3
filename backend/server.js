const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Serve static files from public directory
app.use(express.static(path.join(__dirname, '../public')));

// API Routes
app.get('/api/menu', (req, res) => {
    const menuData = {
        title: 'Menu',
        openingHours: 'Open from 8am to 9pm every day',
        sections: [
            {
                name: 'Sandwiches and wraps',
                items: [
                    {
                        id: 1,
                        name: 'Ham and Cheese',
                        price: 2.95,
                        description: 'Cooked ham, cheddar cheese slices, wholemeal bread'
                    },
                    {
                        id: 2,
                        name: 'Hummus and Feta',
                        price: 3.95,
                        description: 'Roasted red pepper hummus, feta, salad, rye bread'
                    },
                    {
                        id: 3,
                        name: 'Egg classic',
                        price: 1.95,
                        description: 'Free range eggs, mayo, malted granary bread'
                    },
                    {
                        id: 4,
                        name: 'Chicken wrap',
                        price: 1.95,
                        description: 'Chargrilled chicken, garlic mayo, shredded lettuce, plain wrap'
                    }
                ]
            },
            {
                name: 'Soups',
                items: [
                    {
                        id: 5,
                        name: 'Carrot and coriander',
                        price: 2.50,
                        description: 'Warming carrot and coriander served soup with spices'
                    },
                    {
                        id: 6,
                        name: 'Lentil',
                        price: 2.50,
                        description: 'Hearty red lentil soup with a dash of sour cream'
                    },
                    {
                        id: 7,
                        name: 'Tomato',
                        price: 2.50,
                        description: 'Homemade organic roasted tomato soup'
                    }
                ]
            }
        ]
    };

    res.json(menuData);
});


// Root route - serve menu.html
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/menu.html'));
});

// Health check endpoint
app.get('/api/health', (req, res) => {
    res.json({ status: 'Server is running' });
});

// Error handling middleware
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({ error: 'Something went wrong!' });
});

// Start server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
    console.log(`Menu page: http://localhost:${PORT}`);
    console.log(`API endpoint: http://localhost:${PORT}/api/menu`);
});

module.exports = app;
