class CreateFolderContents < ActiveRecord::Migration[6.1]
  def change
    create_table :folder_contents do |t|
      t.belongs_to :folder, null: false, foreign_key: true
      t.integer :contentsable_id
      t.string :contentsable_type

      t.timestamps
    end
  end
end
