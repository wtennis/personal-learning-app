class AddNotesToFolders < ActiveRecord::Migration[6.1]
  def change
    add_column :folders, :note, :text
  end
end
