const mongoose = require('mongoose');
const LeadResult = require('./models/LeadResult'); // Import your LeadResult model

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/mydatabase', { useNewUrlParser: true, useUnifiedTopology: true });

// Search function
const searchLead = async (query) => {
    consile.log("result from the frontend",query)
    try {
        const result = await LeadResult.findOne({
            $or: [
                { emails: query },
                { phone_numbers: query }
            ]
        });

        if (result) {
            // Send the result back to the client
            return result;
        } else {
            return "No matching record found";
        }
    } catch (error) {
        console.error(error);
        return "An error occurred";
    }
};

