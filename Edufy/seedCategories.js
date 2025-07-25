const mongoose = require("mongoose");
const Category = require("./models/Category");
require("dotenv").config();

const categories = [
    {
        name: "Python Programming",
        description: "Learn Python from basics to advanced concepts including data structures, algorithms, and frameworks like Django and Flask."
    },
    {
        name: "Machine Learning",
        description: "Master ML algorithms, data science, and AI concepts with practical implementations using Python and popular libraries."
    },
    {
        name: "Artificial Intelligence", 
        description: "Explore AI fundamentals, neural networks, deep learning, and modern AI applications including NLP and computer vision."
    },
    {
        name: "MERN Stack",
        description: "Full-stack web development with MongoDB, Express.js, React.js, and Node.js for building modern web applications."
    },
    {
        name: "JavaScript",
        description: "Complete JavaScript development from fundamentals to advanced ES6+ features, DOM manipulation, and modern frameworks."
    },
    {
        name: "React.js",
        description: "Build dynamic and interactive web applications with React, including hooks, context API, and popular React libraries."
    },
    {
        name: "Node.js",
        description: "Server-side development with Node.js, Express framework, RESTful APIs, and database integration."
    },
    {
        name: "Data Science",
        description: "Comprehensive data analysis, visualization, statistics, and machine learning for extracting insights from data."
    },
    {
        name: "Web Development",
        description: "Complete web development including HTML5, CSS3, JavaScript, responsive design, and modern web frameworks."
    },
    {
        name: "Mobile Development",
        description: "iOS and Android app development using React Native, Flutter, and native technologies for cross-platform apps."
    },
    {
        name: "DevOps",
        description: "CI/CD pipelines, containerization with Docker, cloud deployment, infrastructure automation, and monitoring."
    },
    {
        name: "Cybersecurity",
        description: "Network security, ethical hacking, penetration testing, security best practices, and threat analysis."
    },
    {
        name: "Cloud Computing",
        description: "AWS, Azure, Google Cloud Platform services, cloud architecture, deployment strategies, and serverless computing."
    },
    {
        name: "Database Management",
        description: "SQL and NoSQL databases, database design, optimization, data modeling, and database administration."
    },
    {
        name: "UI/UX Design",
        description: "User interface design, user experience principles, prototyping, design thinking, and modern design tools."
    }
];

const seedCategories = async () => {
    try {
        console.log("🚀 Starting category seeding process...");
        
        // Connect to MongoDB
        console.log("📡 Connecting to MongoDB...");
        await mongoose.connect(process.env.MONGODB_URL, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log("✅ Connected to MongoDB successfully!");

        // Check existing categories
        const existingCategories = await Category.find({});
        console.log(`📊 Found ${existingCategories.length} existing categories`);

        // Clear existing categories if any
        if (existingCategories.length > 0) {
            console.log("🗑️  Clearing existing categories...");
            await Category.deleteMany({});
            console.log("✅ Existing categories cleared");
        }

        // Insert new categories
        console.log("📚 Adding new categories...");
        const result = await Category.insertMany(categories);
        console.log(`✅ Successfully added ${result.length} categories!`);

        // Display added categories
        console.log("\n🎯 Categories successfully added:");
        console.log("=" .repeat(50));
        result.forEach((cat, index) => {
            console.log(`${(index + 1).toString().padStart(2, '0')}. ${cat.name}`);
        });
        console.log("=" .repeat(50));

        console.log("\n🎉 Category seeding completed successfully!");
        console.log("💡 You can now use these categories in your Add Course form");
        
        // Close connection and exit
        await mongoose.connection.close();
        console.log("🔌 Database connection closed");
        process.exit(0);

    } catch (error) {
        console.error("\n❌ Error occurred during seeding:");
        console.error("Error details:", error.message);
        
        if (error.code === 11000) {
            console.error("🔄 Duplicate key error - Some categories might already exist");
        }
        
        if (error.name === 'ValidationError') {
            console.error("📝 Validation error - Check your category data");
            console.error("Validation details:", error.errors);
        }

        if (error.name === 'MongoNetworkError') {
            console.error("🌐 Network error - Check your MongoDB connection");
        }

        // Close connection and exit with error
        try {
            await mongoose.connection.close();
        } catch (closeError) {
            console.error("Error closing connection:", closeError.message);
        }
        
        process.exit(1);
    }
};

// Handle process interruption (Ctrl+C)
process.on('SIGINT', async () => {
    console.log('\n⏹️  Process interrupted by user');
    try {
        await mongoose.connection.close();
        console.log('🔌 Database connection closed');
    } catch (error) {
        console.error('Error closing connection:', error.message);
    }
    process.exit(0);
});

// Handle unhandled promise rejections
process.on('unhandledRejection', (err) => {
    console.error('❌ Unhandled Promise Rejection:', err.message);
    process.exit(1);
});

// Start the seeding process
console.log("🌱 EduFy Category Seeder");
console.log("=" .repeat(30));
seedCategories();