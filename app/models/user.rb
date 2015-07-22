class User < ActiveRecord::Base
  has_one :location
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable and :omniauthable
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :trackable, :validatable

  def set_location sync_params
    location = self.location || Location.new
    location.user = self
    location.lonlat = "POINT(#{sync_params['lon'].to_f} #{sync_params['lat'].to_f})"
    location.save

    location
  end
end
