class ApplicationController < ActionController::Base
  before_action :authenticate_user!, :configure_permitted_parameters, if: :devise_controller?
  before_action :basic_auth
  protect_from_forgery with: :exception

private

def configure_permitted_parameters
  devise_parameter_sanitizer.permit(:sign_up, keys: [:name])
end

def basic_auth
  authenticate_or_request_with_http_basic do |username, password|
    username == 'admin' && password == '2222'
  end
end

end
