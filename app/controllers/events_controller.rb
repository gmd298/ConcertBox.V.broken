class EventsController < ApplicationController

  def index
    render json: Event.all
  end
  
  def show
    render json: find_event
  end

  def update
    event = find_event
    event.update(
      location:params[:location],
      venue:params[:venue],
      date:params[:date]
    )
    event.to_json
  end

  def destroy
    event = find_event
    event.destroy
    event.to_json
  end

  private

  def find_event
    Event.find(params[:id])
  end

end
