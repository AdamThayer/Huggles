class CreateLocations < ActiveRecord::Migration
  def change
    create_table :locations do |t|
      t.references :user
      t.st_point :lonlat, geographic: true

      t.timestamps null: false
    end

    add_index :locations, :lonlat, using: :gist
  end
end
