class EnablePostgis < ActiveRecord::Migration
  def up
    ActiveRecord::Base.connection.execute """
   CREATE EXTENSION IF NOT EXISTS postgis;
-- Enable Topology
CREATE EXTENSION IF NOT EXISTS postgis_topology;
-- fuzzy matching needed for Tiger
CREATE EXTENSION IF NOT EXISTS fuzzystrmatch;
"""
  end

  def down

  end
end
