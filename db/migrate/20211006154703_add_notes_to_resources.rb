class AddNotesToResources < ActiveRecord::Migration[6.1]
  def change
    add_column :resources, :note, :text
  end
end
