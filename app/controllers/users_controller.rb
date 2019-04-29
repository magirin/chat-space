class UsersController < ApplicationController

  def edit
  end

  def update
    if current_user.update(user_params)
      redirect_to root_path
    else
      render :edit
    end
  end

  def index
    @user = User.all
    # if @user
    #   respond_to do |format|
    #     format.html 
    #     format.json
    #   end
    #   # flash[:notice] = 'メッセージが送信されました'
    # end
  end


private

  def user_params
    params.requier(:user).permit(:name, :email)
  end

end
