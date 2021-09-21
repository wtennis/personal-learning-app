class RemoveFolderIdFromFolderContents < ActiveRecord::Migration[6.1]
  def change
    remove_column :folder_contents, :folder_id
  end
end
