# Load the Rails application.
require_relative 'application'

# Google OmniAuth 
ENV['GOOGLE_CLIENT_ID'] = "176381706594-ntdia2rh4sdsd4vnrtaukdrtk5vnq378.apps.googleusercontent.com"
ENV['GOOGLE_CLIENT_SECRET'] = "Pw45IF9RG0Nvueu4WKhbFDdi"

# Initialize the Rails application.
Rails.application.initialize!
