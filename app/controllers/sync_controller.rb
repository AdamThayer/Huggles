class SyncController < ApplicationController
  def sync
    location = current_user.set_location sync_params if user_signed_in?
    lat = sync_params[:lat]
    lon = sync_params[:lon]

    locs = Location.where "ST_DWithin(lonlat, 'POINT(? ?)', 500.0)", lon.to_f, lat.to_f
    locs = locs.where "updated_at >= now() - INTERVAL '3 minutes'"
    locs = locs.where "user_id <> ?", current_user.id
    logger.debug " LOCS: #{locs.to_a.inspect}"
    points = locs.map{|x| [x.lonlat.x, x.lonlat.y]}
    render js: "showPins(#{points})"
  end

def refresh_points

end

  private

  def sync_params
    params.require(:sync).permit :lat, :lon
  end
end