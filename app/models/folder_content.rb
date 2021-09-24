class FolderContent < ApplicationRecord
  belongs_to :contentsable, polymorphic: true
  belongs_to :folder
  

  # private
  #   def delete_parents
  #     self.class.delete_by(contentsable_id: id)
  #   end

end
