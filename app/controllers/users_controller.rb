class UsersController < ApplicationController
  rescue_from ActiveRecord::RecordNotFound, with: :render_record_not_found
  rescue_from ActiveRecord::RecordInvalid, with: :render_record_invalid

  def index
    render json: User.all
  end

  def show
    render json: find_user
  end

  private

  def find_user
    User.find(params[:id])
  end

  def render_record_not_found
    render json: { error: "User not found"}, status: :not_found
  end

  def render_record_invalid(exception)
    render json: {errors: exception.record.errors.full_messages}, status: :unprocessable_entity
  end

end
