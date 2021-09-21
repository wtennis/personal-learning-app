class CreateNotes < ActiveRecord::Migration[6.1]
  def change
    create_table :notes do |t|
      t.text :text
      t.integer :belongsable_id
      t.string :belongsable_type

      t.timestamps
    end
  end
end
