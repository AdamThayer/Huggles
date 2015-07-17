class SyncController < ApplicationController
  def sync
    location = current_user.set_location sync_params if user_signed_in?

    render js: "showPins([[-117.128954,32.7477], [-117.126975, 32.748002]])"
  end

  private

  def sync_params
    params.require(:sync).permit :lat, :lon
  end
end