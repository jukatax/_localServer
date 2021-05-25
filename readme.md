# Local server
* Serve files from the parent directory with `https` protocol

# Create your certificate files
* Open Terminal in this folder
* Run the following command: `openssl req -newkey rsa:2048 -new -nodes -x509 -days 3650 -keyout ./key.pem -out ./cert.pem`
* Fill in the fields asked in Terminal as follows:
     * Country Name (2 letter code) []:UK
     * State or Province Name (full name) []:YourCountyHere
     * Locality Name (eg, city) []:YourCityHere
     * Organization Name (eg, company) []:YourCompanyName
     * Organizational Unit Name (eg, section) []:YourDepartmentHere
     * Common Name (eg, fully qualified host name) []:localhost
     * Email Address []:yuliyan.yordanov@company.com

# How to run
`nodemon server.js`
or
`node server.js`

All done! Your are now ready to serve your local files from `localhost:8335/parentFolder/`