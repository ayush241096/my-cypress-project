echo "Starting Cypress Tests..."

# Navigate to your project directory (if needed)
cd /path/to/your/project

# Install dependencies (if not installed)
npm install

# Run Cypress Tests
npx cypress run --env baseUrl=https://qa.yourwebsite.com

# Capture the exit status
EXIT_CODE=$?

# Handle test results
if [ $EXIT_CODE -ne 0 ]; then
    echo "Cypress tests failed!"
    exit 1  # Mark the build as failed
else
    echo "Cypress tests passed successfully!"
fi



# Sending slak notifications

if [ $EXIT_CODE -ne 0 ]; then
    echo "Cypress tests failed!"
    curl -X POST -H 'Content-type: application/json' --data '{"text":"Cypress Tests Failed 🚨"}' https://hooks.slack.com/services/YOUR/SLACK/WEBHOOK
    exit 1
else
    echo "Cypress tests passed successfully!"
fi
