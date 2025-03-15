<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>CeeCine - Movie Ticket Booking Website</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            margin: 40px;
            padding: 20px;
            background-color: #f4f4f4;
            color: #333;
        }
        h1, h2 {
            color: #2c3e50;
        }
        ul, ol {
            background: #fff;
            padding: 15px;
            border-radius: 8px;
            box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
        }
        pre {
            background: #333;
            color: #fff;
            padding: 10px;
            border-radius: 5px;
            overflow-x: auto;
        }
        a {
            color: #3498db;
            text-decoration: none;
        }
        a:hover {
            text-decoration: underline;
        }
    </style>
</head>
<body>
    <h1>CeeCine - Movie Ticket Booking Website</h1>
    <p>CeeCine is an online Movie Ticket Booking website built using the MERN Stack.</p>

    <h2>Table of Contents</h2>
    <ul>
        <li><a href="#features">Features</a></li>
        <li><a href="#tech-stack">Tech Stack</a></li>
        <li><a href="#installation">Installation</a></li>
        <li><a href="#license">License</a></li>
    </ul>

    <h2 id="features">Features</h2>
    <ul>
        <li>User authentication and authorization</li>
        <li>Browse movies and showtimes</li>
        <li>Book tickets online</li>
        <li>Payment integration</li>
        <li>Admin panel for managing movies and bookings</li>
        <li>Responsive design for mobile and desktop</li>
    </ul>

    <h2 id="tech-stack">Tech Stack</h2>
    <p>CeeCine is built using the following technologies:</p>
    <ul>
        <li><strong>Frontend:</strong> Next.js, React.js</li>
        <li><strong>Backend:</strong> Node.js, Express.js</li>
        <li><strong>Database:</strong> MongoDB</li>
        <li><strong>Styling:</strong> Tailwind CSS / CSS Modules</li>
        <li><strong>Authentication:</strong> JWT (JSON Web Token)</li>
    </ul>

    <h2 id="installation">Installation</h2>
    <p>Follow these steps to set up and run the project locally:</p>

    <h3>Prerequisites</h3>
    <ul>
        <li>Node.js (>=14.x)</li>
        <li>MongoDB (local or cloud instance)</li>
        <li>npm or yarn</li>
    </ul>

    <h3>Steps</h3>
    <ol>
        <li>Clone the repository:
        </li>
        <li>Install dependencies:
            <pre>npm install  # or yarn install</pre>
        </li>
        <li>Set up environment variables:
            <ul>
                <li>Create a <code>.env</code> file in the root directory</li>
                <li>Add the necessary environment variables (e.g., MongoDB URI, JWT secret, payment gateway keys)</li>
            </ul>
        </li>
        <li>Start the development server:
            <pre>npm run dev  # or yarn dev</pre>
        </li>
        <li>Open the app in your browser:
            <pre>http://localhost:8000</pre>
        </li>
    </ol>

    <h2 id="license">License</h2>
    <p>This project is licensed under the MIT License.</p>

</body>
</html>
