class UsersController < ApplicationController

def edit
end

def update
end

private

  def user_params
    params.requier(:user).(:name, :email)
  end

end
